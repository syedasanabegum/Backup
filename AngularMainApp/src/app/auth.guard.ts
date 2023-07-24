import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticatedUser) {
      return of(true); // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to the login page
      return of(false);
    }
  }
}
