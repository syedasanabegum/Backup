import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule], // Add HttpClientTestingModule here
      providers: [AuthService, AuthGuard],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
/*
  it('should allow access to the route if user is authenticated', () => {
    // Simulate that the user is authenticated
    authService.isAuthenticatedUser = true;

    guard.canActivate().subscribe((result) => {
      expect(result).toBe(true);
    });
  });

  it('should redirect to login page if user is not authenticated', () => {
    // Simulate that the user is not authenticated
    authService.isAuthenticatedUser = false;

    guard.canActivate().subscribe((result) => {
      expect(result).toBe(false);
      // Verify that the router.navigate method is called with '/login'
      const routerSpy = spyOn(TestBed.inject(Router), 'navigate');
      expect(routerSpy).toHaveBeenCalledWith(['/login']);
    });
  });
  */
});
