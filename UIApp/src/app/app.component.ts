import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIApp';
  userProfileImageUrl: string = '../assets/avatar.png'; // Replace with the actual image URL
  userDisplayName: string = 'John Doe'; 
}
