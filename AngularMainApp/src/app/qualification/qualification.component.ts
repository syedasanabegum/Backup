import { Component } from '@angular/core';

interface Qualification {
  qualification: string;
  institute: string;
  duration: string;
  percentage: string;
}

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {
  showForm: boolean = false;
  qualifications: Qualification[] = [];
  newQualification: Qualification = {
    qualification: '',
    institute: '',
    duration: '',
    percentage: ''
  };

  // Variables for editing qualification
  editMode: boolean = false;
  editIndex: number = -1;

  toggleForm() {
    this.showForm = !this.showForm;
    this.resetForm();
  }

  addQualification() {
    if (this.editMode) {
      // Update existing qualification
      this.qualifications[this.editIndex] = { ...this.newQualification };
    } else {
      // Add new qualification
      this.qualifications.push({ ...this.newQualification });
    }
    
    this.resetForm();
  }

  editQualification(qualification: Qualification) {
    this.editMode = true;
    this.editIndex = this.qualifications.indexOf(qualification);
    this.newQualification = { ...qualification };
    this.showForm = true;
  }

  deleteQualification(qualification: Qualification) {
    const index = this.qualifications.indexOf(qualification);
    if (index !== -1) {
      this.qualifications.splice(index, 1);
    }
  }

  resetForm() {
    this.editMode = false;
    this.editIndex = -1;
    this.newQualification = {
      qualification: '',
      institute: '',
      duration: '',
      percentage: ''
    };
  }
}
