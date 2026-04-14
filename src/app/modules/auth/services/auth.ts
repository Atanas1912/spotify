import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly URL = environment.api;
  
  // constructor(private http: HttpClient, private cookie: CookieService) {}
   constructor(private http: HttpClient, private cookie: CookieService) {}

  sendCredentials(email:string, password:string): Observable<any> {
    const body = {
      email, password
    }

    return this.http.post(`${this.URL}/auth/login`, body)
     .pipe(
       tap((responseOK: any) => {
         const { tokenSession, data } = responseOK //desestructuramos la respuesta para obtener el tokenSession y los datos del usuario
         this.cookie.set('token_service', tokenSession, 4, '/') //guardamos el token en una cookie con una duración de 4 días y una ruta de acceso de toda la aplicación '/'
       })
     )
  }

  suma(a:number, b:number): number {
    return a+b
  }
}