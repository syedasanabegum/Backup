import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { id: null!,firstName:'' ,lastName: '', age:null!};// name: '',
  mode!: string;

  constructor(
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.mode = this.data.mode;

    if (this.mode === 'edit' && this.data.employee) {
      this.employee = { ...this.data.employee };
    }
  }

  saveEmployee() {
    this.dialogRef.close(this.employee);
  }

  cancel() {
    this.dialogRef.close();
  }
}
