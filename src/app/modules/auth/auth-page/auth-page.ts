import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage implements OnInit {
  formLogin: FormGroup = new FormGroup({})

  constructor(private asAuthService: Auth) {} //inyectamos el servicio

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
    const { email, pasword } = this.formLogin.value;
    
    this.asAuthService.sendCredentials(email, pasword);
  }

}
