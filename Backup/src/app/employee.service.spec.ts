import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get employees', () => {
    const mockEmployees: Employee[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 35 },
    ];

    service.getEmployees().then((employees) => {
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpTestingController.expectOne('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
    expect(req.request.method).toEqual('GET');
    req.flush(mockEmployees);
  });

  it('should create an employee', () => {
    const newEmployee: Employee = { id: 3, firstName: 'Mike', lastName: 'Johnson', age: 25 };

    service.createEmployee(newEmployee).then((employee) => {
      expect(employee).toEqual(newEmployee);
    });

    const req = httpTestingController.expectOne('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
    expect(req.request.method).toEqual('POST');
    req.flush(newEmployee);
  });

  // Add tests for updateEmployee and deleteEmployee similarly.
});
