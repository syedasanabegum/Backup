/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}&id=${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `${this.apiUrl}&id=${id}`;
    return this.http.delete(url);
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

  constructor(private http: HttpClient) { }

  getEmployees(): Promise<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl).toPromise()
      .then(response => response as Employee[]);
  }

  createEmployee(employee: Employee): Promise<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee).toPromise()
      .then(response => response as Employee);
  }

  updateEmployee(employee: Employee): Promise<Employee> {
    const url = `${this.apiUrl}&id=${employee.id}`;
    return this.http.put<Employee>(url, employee).toPromise()
      .then(response => response as Employee); 
  }

  deleteEmployee(id: number): Promise<any> {
    const url = `${this.apiUrl}&id=${id}`;
    return this.http.delete(url).toPromise();
  }
}


