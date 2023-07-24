import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private router: Router) {}

  project(): void{
    this.router.navigate(['/projects']);
  }
  skills(): void{
    this.router.navigate(['/skills']);
  }
  Logout(): void{
    this.router.navigate(['/logout']);
  }
}
