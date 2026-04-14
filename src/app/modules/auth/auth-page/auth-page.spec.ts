import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPage } from './auth-page';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Auth } from '../services/auth';
import { vi } from 'vitest';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPage],
      providers: [
        {
          provide: Auth,
          useValue: { login: vi.fn() }
        },
        {
          provide: Router,
          useValue: { navigate: vi.fn() }
        },
        {
          provide: CookieService,
          useValue: { get: vi.fn(), set: vi.fn() }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });

  //MI PRIMERA PRUEBA LA CUAL DEBE ASEGURAR;
  //Debe de asegurarse que el formulario sea invalido cuando ingrese datos erróneos

  // Patrón AAA (Manera ordenada de trabajar)


  it('Debería de devolver inválido el formulario', () => {

    //Primera A => Arrange (Arranque)
    const mockCredentials = {
      email: '0x0x0x0x',
      password: '2222222222222222222222222' //Meto datos diferentes de las validaciones
    }

    const emailForm : any = component.formLogin.get('email')
    const passwordForm : any = component.formLogin.get('password')

    //Segunda A => Act (Actuar)
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Tercera A => Assert (Lo que espero que pase)

    expect(component.formLogin.invalid).toEqual(true)
  });

it('Debería de devolver válido el formulario', () => {

    //Primera A => Arrange (Arranque)
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678' //Meto datos buenos
    }

    const emailForm : any = component.formLogin.get('email')
    const passwordForm : any = component.formLogin.get('password')

    //Segunda A => Act (Actuar)
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Tercera A => Assert (Lo que espero que pase)

    expect(component.formLogin.invalid).toEqual(false)
  });
  
  it('El botón debería de tener la palabra "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('button.login'))
    const getInnerText = elementRef.nativeElement.textContent

    expect(getInnerText).toEqual('Iniciar sesión')

  });

});
