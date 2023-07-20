//username: 'kminchelle',
//password: '0lelplR',
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
