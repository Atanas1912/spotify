import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { SessionGuard } from './session-guard';

describe('sessionGuard', () => {
  let cookieService: CookieService;
  let router!: Router

  const executeGuard: CanActivateFn = (route, state) => 
      TestBed.runInInjectionContext(() => new SessionGuard(cookieService, router).canActivate(route, state));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieService]
    });
    cookieService = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
