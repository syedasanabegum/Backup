//username: 'kminchelle',
//password: '0lelplR',
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigateToQualification(): void {
    this.router.navigate(['/qualification']);
  }
  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.logout();
    
  }
  ngOnInit(): void{

  }
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
