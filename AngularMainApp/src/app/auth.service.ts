import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', { username, password });
  }

  logout(): void {
    // Perform logout logic
    
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
    
  }

  get isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  set isAuthenticatedUser(value: boolean) {
    this.isAuthenticated = value;
  }
  
}
