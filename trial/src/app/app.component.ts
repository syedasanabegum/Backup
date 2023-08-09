import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: any[] = []; // Array to store the card data

  constructor(public dialog: MatDialog) { }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '400px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(formData => {
      if (formData) {
        this.cards.push(formData); // Add the form data to the cards array
      }
    });
  }
  
  
}
