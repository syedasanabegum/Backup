import { TestBed, ComponentFixture, async, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
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
  afterClosed: () => of(null), 
  afterOpened: () => of(null),
};


describe('Deep Integration Test between employeelist and employeeForm', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let dialog: MatDialog;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatDialogModule, BrowserAnimationsModule, HttpClientModule,MatIconModule],
      declarations: [
        EmployeeListComponent,
        EmployeeFormComponent,
        HeaderComponent, 
      ],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
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

//connection with template
  it('should display employees table in the template', fakeAsync(() => {
    // Trigger the asynchronous data fetching
    fixture.detectChanges();
  
    // Expect that the getEmployees method of mockEmployeeService is called
    expect(mockEmployeeService.getEmployees).toHaveBeenCalled();
  
    // Simulate a delay of 50ms (you can adjust this value based on your actual data fetching time)
    tick(50);
  
    // Trigger change detection to update the table with the fetched data
    fixture.detectChanges();
  
    // Query the table rows after data has been loaded
    const tableRows = fixture.nativeElement.querySelectorAll('mat-row');
   // expect(tableRows.length).toBe(2); // Assuming two employees are fetched in mockEmployeeService
  }));
  //opening of dialog box
  it('should open EmployeeFormComponent dialog when "Create Employee" button is clicked', () => {
    spyOn(dialog, 'open').and.callThrough();

    // Trigger the "Create Employee" button click
    const createButton = fixture.debugElement.query(By.css('.add-employee-button'));
    createButton.nativeElement.click();

    fixture.detectChanges(); // Update the component after the dialog opens

    expect(dialog.open).toHaveBeenCalledOnceWith(EmployeeFormComponent, {
      width: '400px',
      maxHeight: 'fit-content',
      data: { mode: 'create' },
    });
  });
  //opening of dialog box with data on edit
  it('should open EmployeeFormComponent dialog with employee data when "Edit" button is clicked', () => {
    const employees: Employee[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 35 },
    ];
    component.employees.data = employees;
    fixture.detectChanges();

    spyOn(dialog, 'open').and.callThrough();

    // Trigger the "Edit" button click for the first employee
    const editButton = fixture.debugElement.query(By.css('.edit-employee-button'));
    editButton.nativeElement.click();

    fixture.detectChanges(); // Updates

    expect(dialog.open).toHaveBeenCalledOnceWith(EmployeeFormComponent, {
      width: '400px',
      maxHeight: 'fit-content',
      data: { mode: 'edit', employee: employees[0] },
    });
  });
  //updating the table when we submit the form
  it('should update the table when a new employee is created through EmployeeFormComponent', () => {
    const newEmployee: Employee = { id: 3, firstName: 'Lucas', lastName: 'Johnson', age: 25 };
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(newEmployee),
    } as any);

    const addButton = fixture.debugElement.query(By.css('.add-employee-button'));
    addButton.nativeElement.click();

    fixture.detectChanges();

    const tableRows = fixture.nativeElement.querySelectorAll('mat-row');
    expect(tableRows.length).toBe(1);//check rows
    expect(component.employees.data[0]).toEqual(newEmployee);
  });
  //invoking array methods
  it('should invoke the corresponding array methods when "Array Methods" button is clicked', () => {
    spyOn(component, 'arrayPop');
    spyOn(component, 'arrayForEach');
    spyOn(component, 'arrayReduce');
    spyOn(component, 'arrayFilter');
    spyOn(component, 'arrayIncludes');
    spyOn(component, 'arrayFind');

    const arrayMethodsButton = fixture.debugElement.query(By.css('.array-methods-button'));
    arrayMethodsButton.nativeElement.click();

    expect(component.arrayPop).toHaveBeenCalled();
    expect(component.arrayForEach).toHaveBeenCalled();
    expect(component.arrayReduce).toHaveBeenCalled();
    expect(component.arrayFilter).toHaveBeenCalled();
    expect(component.arrayIncludes).toHaveBeenCalled();
    expect(component.arrayFind).toHaveBeenCalled();
  });
//including navbar using headercomponent
  it('should include HeaderComponent in the template', () => {
    const headerElement = fixture.debugElement.query(By.directive(HeaderComponent));
    expect(headerElement).toBeTruthy();
  });
});

