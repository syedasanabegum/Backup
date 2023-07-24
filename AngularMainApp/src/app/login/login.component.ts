//username: 'kminchelle',
//password: '0lelplR',
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthGuard} from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = ''; // Assign a default value here
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        const isAuthenticated = response.token || response.success;
        if (isAuthenticated) {
          this.authService.isAuthenticatedUser = true;
          this.router.navigate(['/home']); // Redirect to the protected route
        } else {
          // Handle login failure, show error message, etc.
        }
      },
      (error) => {
        // Handle login error, show error message, etc.
      }
    );
  }
}
/*export class LoginComponent {
  signupUsername = '';
  signupPassword = '';

  constructor(private http: HttpClient, private router: Router) { }

  signup(): void {
    // Send user data to server
    this.http.post('https://dummyjson.com/auth/login', {
      username: this.signupUsername,
      password: this.signupPassword
    }).subscribe((response: any) => {
      console.log('POST Successful');
      console.log(response);

      //this.authGuard.setCredentials(username, password);
      // Redirect to home page
      this.router.navigate(['/home']);
    });
  }
}
*/
