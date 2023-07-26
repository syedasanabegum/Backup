import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from '../auth.guard';
import { AuthService, MockAuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('AuthGuard with Authservice', () => {
  let authService: MockAuthService;
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService }
      ]
    });

    authService = TestBed.inject(AuthService);
    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should allow access to the route when the user is authenticated', (done) => {
    authService.isAuthenticatedUser = true;

    const canActivateResult: Observable<boolean> = authGuard.canActivate();
    canActivateResult.subscribe((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('should redirect to the login page when the user is not authenticated', (done) => {
    authService.isAuthenticatedUser = false;
    const routerNavigateSpy = spyOn(router, 'navigate');

    const canActivateResult: Observable<boolean> = authGuard.canActivate();
    canActivateResult.subscribe((result) => {
      expect(result).toBe(false);
      expect(routerNavigateSpy).toHaveBeenCalledWith(['/login']);
      done();
    });
  });
});
