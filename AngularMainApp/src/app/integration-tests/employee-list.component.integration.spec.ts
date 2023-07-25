import { TestBed, ComponentFixture, async, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

const mockEmployeeService = {
  getEmployees: jasmine.createSpy('getEmployees').and.returnValue(
    of([
      { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 35 },
    ])
  ),
};

const mockMatDialogRef = {
  afterClosed: () => of(null), // Simulate the dialog being closed without returning any data
};

describe('EmployeeListIntegrationComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let dialog: MatDialog;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatDialogModule, BrowserAnimationsModule, HttpClientModule],
      declarations: [EmployeeListComponent, EmployeeFormComponent,HeaderComponent],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: MatDialogRef, useValue: mockMatDialogRef }, // Provide a mock for MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should open a dialog to add a new employee', () => {
    spyOn(dialog, 'open').and.callThrough();

    // Trigger the "Add Employee" button click
    const addButton = fixture.debugElement.query(By.css('.add-employee-button'));
    addButton.nativeElement.click();

    expect(dialog.open).toHaveBeenCalledOnceWith(EmployeeFormComponent, {
      width: '400px',
      maxHeight: 'fit-content',
      data: { mode: 'create' },
    });
  });
/*
  it('should update the table when a new employee is created', () => {
    // Simulate returning a new employee from the dialog
    const newEmployee: Employee = { id: 3, firstName: 'Lucas', lastName: 'Johnson', age: 25 };
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(newEmployee),
    } as any);

    // Trigger the "Add Employee" button click
    const addButton = fixture.debugElement.query(By.css('.add-employee-button'));
    addButton.nativeElement.click();

    fixture.detectChanges();

    // Check if the new employee is added to the table
    expect(component.employees.data.length).toBe(3);
    expect(component.employees.data[2]).toEqual(newEmployee);
  });
  */
});
