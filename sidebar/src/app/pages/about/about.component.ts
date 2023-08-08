import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cards: any[] = []; // Array to store the card data

  constructor(public dialog: MatDialog) { }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '400px'
      // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(formData => {
      if (formData) {
        this.cards.push(formData); // Add the form data to the cards array
      }
    });
  }
}
