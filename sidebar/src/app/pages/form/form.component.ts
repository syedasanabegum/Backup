import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../data.service'; // Import the DataService

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {}; // Initialize an empty object to hold form data

  constructor(private dataService: DataService) {}

  /*submitForm(form: NgForm) {
    if (form.valid) {
      this.dataService.setData([this.formData.name, this.formData.email]);
      form.resetForm();
    }
  }*/
  submitForm(form: NgForm) {
    if (form.valid) {
      this.dataService.addData({ date:this.formData.date,time:this.formData.time, doorCode:this.formData.doorCode,
        gateCode:this.formData.gateCode, title:this.formData.title,contactNO:this.formData.contactNO, 
        address:this.formData.address,name: this.formData.name, email: this.formData.email });
      form.resetForm();
    }
  }
  
 
}
