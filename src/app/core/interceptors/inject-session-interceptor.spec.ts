import { CookieService } from 'ngx-cookie-service';
import { injectSessionInterceptor } from './inject-session-interceptor';
import { TestBed } from '@angular/core/testing';

describe('injectSessionInterceptor', () => {
  let interceptor: injectSessionInterceptor;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieService]
    });
    cookieService = TestBed.inject(CookieService);
    interceptor = new injectSessionInterceptor(cookieService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});