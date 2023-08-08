import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent {
  formData: any = {
    title: '',
    description: ''
  }; // Initialize an empty object for form data

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>) { }

  onSubmit() {
    // Close the dialog and pass the form data to the parent component
    this.dialogRef.close(this.formData);
  }
}
