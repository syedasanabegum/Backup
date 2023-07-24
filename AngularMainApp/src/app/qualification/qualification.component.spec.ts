import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { QualificationComponent } from './qualification.component';
import { HeaderComponent } from '../header/header.component';

describe('QualificationComponent', () => {
  let component: QualificationComponent;
  let fixture: ComponentFixture<QualificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationComponent, HeaderComponent],
      imports: [FormsModule, HttpClientModule], 
    });
    fixture = TestBed.createComponent(QualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle the form when the "Add Course" button is clicked', () => {
    expect(component.showForm).toBe(false);

    const addButton = fixture.nativeElement.querySelector('.add-button');
    addButton.click();
    fixture.detectChanges();

    expect(component.showForm).toBe(true);

    addButton.click();
    fixture.detectChanges();

    expect(component.showForm).toBe(false);
  });
  it('should add new qualification when editMode is false', () => {
    component.editMode = false;
    component.qualifications = [
      { id:'1',qualification: 'Qualification 1', institute: 'Institute 1', duration: 'Duration 1', percentage: 'Percentage 1' },
      {id:'2', qualification: 'Qualification 2', institute: 'Institute 2', duration: 'Duration 2', percentage: 'Percentage 2' },
    ];
    component.newQualification = { id:'New id',qualification: 'New Qualification', institute: 'New Institute', duration: 'New Duration', percentage: 'New Percentage' };
    // Create a spy for the resetForm method
    spyOn(component, 'resetForm');

    component.addQualification();
    
    // Expect that the new qualification is added to the qualifications array
    expect(component.qualifications.length).toBe(3);
    expect(component.qualifications[2].qualification).toBe('New Qualification');
    expect(component.qualifications[2].institute).toBe('New Institute');
    expect(component.qualifications[2].duration).toBe('New Duration');
    expect(component.qualifications[2].percentage).toBe('New Percentage');

    // Expect resetForm() to have been called
    expect(component.resetForm).toHaveBeenCalled();
  });
  it('should update existing qualification when editMode is true', () => {
    component.editMode = true;
    component.editIndex = 0;
    component.qualifications = [
      {id:'1', qualification: 'Qualification 1', institute: 'Institute 1', duration: 'Duration 1', percentage: 'Percentage 1' },
      { id:'2',qualification: 'Qualification 2', institute: 'Institute 2', duration: 'Duration 2', percentage: 'Percentage 2' },
    ];
    component.newQualification = {id:'updated ID', qualification: 'Updated Qualification', institute: 'Updated Institute', duration: 'Updated Duration', percentage: 'Updated Percentage' };

    // Create a spy for the resetForm method
    spyOn(component, 'resetForm');

    component.addQualification();
    // Expect that the qualification at editIndex is updated
    expect(component.qualifications[0].qualification).toBe('Updated Qualification');
    expect(component.qualifications[0].institute).toBe('Updated Institute');
    expect(component.qualifications[0].duration).toBe('Updated Duration');
    expect(component.qualifications[0].percentage).toBe('Updated Percentage');
    expect(component.qualifications.length).toBe(2);

    // Expect resetForm() to have been called
    expect(component.resetForm).toHaveBeenCalled();
  });
 
   it('should delete a qualification when the "deleteQualification" method is called', () => {
    const qualificationToDelete = {
      id: '1',
      qualification: 'Qualification 1',
      institute: 'Institute 1',
      duration: 'Duration 1',
      percentage: 'Percentage 1',
    };
    component.qualifications.push(qualificationToDelete);

    // Call the deleteQualification() method
    component.deleteQualification(qualificationToDelete);

    // Expect the qualification to be removed from the qualifications array
    expect(component.qualifications.length).toBe(0);
  });
  
});
