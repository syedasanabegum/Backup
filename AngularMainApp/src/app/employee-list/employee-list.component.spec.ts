import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../employee.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Employee } from '../employee.model';
import { HeaderComponent } from '../header/header.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  const mockEmployees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 35 },
  ];

  beforeEach(async () => {
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getEmployees', 'createEmployee', 'updateEmployee', 'deleteEmployee']);
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [EmployeeListComponent, HeaderComponent],
      imports: [MatTableModule, MatDialogModule, HttpClientTestingModule, MatIconModule],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: MatDialog, useValue: mockMatDialog },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch employee data on initialization', async () => {
    mockEmployeeService.getEmployees.and.returnValue(Promise.resolve(mockEmployees));

    await component.ngOnInit();
    expect(component.employees.data.length).toBe(2);
    expect(mockEmployeeService.getEmployees).toHaveBeenCalled();
  });

  it('should delete an employee when user confirms', async () => {
    spyOn(window, 'confirm').and.returnValue(true);
  
     const mockEmployeesData: Employee[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 35 },
    ];
    component.employees.data = mockEmployeesData;
  
    
    const employeeToDelete = mockEmployeesData[0];
  
    await component.deleteEmployee(employeeToDelete.id);
  
     expect(window.confirm).toHaveBeenCalled();
  
     expect(component.employees.data).not.toContain(employeeToDelete);
  });

  it('should update an employee in the MatTable', () => {
    const mockEmployeesData: Employee[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 35 },
    ];
    component.employees.data = mockEmployeesData;
  
     const updatedEmployee: Employee = { id: 2, firstName: 'John', lastName: 'Wick', age: 32 };
  
    component.updateEmployee(updatedEmployee);
  
     const index = component.employees.data.findIndex(emp => emp.id === updatedEmployee.id);
  
     expect(index).toBeGreaterThan(-1); // The employee should be found
    expect(component.employees.data[index]).toEqual(updatedEmployee);
  });
  //Adding new employee
  it('should create a new employee and add it to the MatTableDataSource', () => {
    const mockEmployeesData: Employee[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 35 },
      {id:3, firstName:'sana', lastName:'syeda', age:20},
    ];
    component.employees.data = mockEmployeesData;
  
    const newEmployee: Employee = { id: 4, firstName: 'New', lastName: 'Employee', age: 25 };
  
    component.createEmployee(newEmployee);
  
    const createdEmployee = component.employees.data.find(emp => emp.id === newEmployee.id);
  
    expect(createdEmployee).toBeDefined();
    expect(component.employees.data.length).toBe(mockEmployeesData.length);
  });

 
});
