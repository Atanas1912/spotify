import { TestBed } from '@angular/core/testing';
import * as mockRaw from '../../../data/user.json'
import { Auth } from './auth';
import { of } from 'rxjs'

describe('Auth', () => {
  let service!: Auth;
  let mockUser: any = (mockRaw as any).default
  let httpClientSpy: { post: jasmine.Spy}
  let cookieServiceSpy: { set: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    cookieServiceSpy = jasmine.createSpyObj('CookieService', ['set'])
    service = new Auth(httpClientSpy as any, cookieServiceSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //prueba del sendCredentials
  it('Debe de devolver un objeto con "data" y "tokenSession"', (done:DoneFn) =>{

    //Metodo AAA ;

    //Arranque
    const user:any = mockUser.userOk
    const mockResponse = {
      data:{},
      tokenSession: '0x0x0x'
    }

    httpClientSpy.post.and.returnValue(
      of(mockResponse) //creo observable con of() para que no reviente al devolver el post el sendCredentials
    )

    //Acción
    service.sendCredentials(user.email, user.password)
      .subscribe(responseApi => {
        const getProperties = Object.keys(responseApi)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
        expect(responseApi).toEqual(mockResponse);
        expect(httpClientSpy.post).toHaveBeenCalledWith(jasmine.stringMatching('/auth/login'), { email: user.email, password: user.password });
        done();
      });
  })

  it('Test de suma 2 + 3', () => {
    const a = 2
    const b = 3

    const c = service.suma(a,b)

    expect(c).toEqual(5)
  })

});
