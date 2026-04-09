import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../services/auth';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { injectSessionInterceptor } from '@core/interceptors/inject-session-interceptor';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS, 
      useValue: injectSessionInterceptor,
      multi: true
    }
  ],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({})

  constructor(private asAuthService: Auth, private cookie: CookieService, private router: Router) {} //inyectamos el servicio

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required, 
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void{
    const { email, pasword } = this.formLogin.value
    this.asAuthService.sendCredentials(email, pasword)
    .subscribe(responseOk => { //cuando la respuesta es OK
      console.log('Respuesta OK', responseOk)
      const { tokenSession, data } = responseOk //desestructuramos la respuesta para obtener el tokenSession y los datos del usuario
      this.cookie.set('token', tokenSession, 4, '/') //guardamos el token en una cookie con una duración de 4 días y una ruta de acceso de toda la aplicación '/'
      this.router.navigate(['/', 'tracks'])
    },
    err => { //cuando la respuesta es un error (!= 200
      this.errorSession = true
      console.log('Respuesta KO', err)
    })
  }

}
