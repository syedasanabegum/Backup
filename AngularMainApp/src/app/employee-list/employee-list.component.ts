/*import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName','lastName','age', 'actions'];//'name',
  employees: MatTableDataSource<Employee>;
  @ViewChild('loading') loadingTemplate!: TemplateRef<any>;

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) {
    this.employees = new MatTableDataSource<Employee>([]);
  }

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeService.getEmployees().subscribe(
      employees => {
        this.employees = new MatTableDataSource<Employee>(employees);
      },
      error => {
        console.log('Error fetching employee data:', error);
      }
    );
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      maxHeight: 'fit-content',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEmployee(result);
      }
    });
  }

  openEditDialog(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      maxHeight:'fit-content',
      data: { mode: 'edit', employee: employee }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateEmployee(result);
      }
    });
  }

  createEmployee(employee: Employee) {
    
    const currentData = this.employees.data;
  const highestId = Math.max(...currentData.map(emp => emp.id)); // Find the highest existing ID
  const newId = highestId + 1; // Increment the highest ID to assign a new ID
  employee.id = newId;
  currentData.push(employee);
  this.employees.data = currentData;
  }
  

  updateEmployee(updatedEmployee: Employee) {
    const currentData = this.employees.data;
    const index = currentData.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      currentData[index] = updatedEmployee;
      this.employees.data = currentData;
    }
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      const currentData = this.employees.data;
      const index = currentData.findIndex(emp => emp.id === id);
      if (index !== -1) {
        currentData.splice(index, 1);
        this.employees.data = currentData;
      }
    }
  }
}*/
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'actions'];
  employees: MatTableDataSource<Employee>;
  @ViewChild('loading') loadingTemplate!: TemplateRef<any>;

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) {
    this.employees = new MatTableDataSource<Employee>([]);
  }

  ngOnInit() {
    this.getEmployeeData();
  }

  async getEmployeeData() {
    try {
      const employees = await this.employeeService.getEmployees();
      this.employees = new MatTableDataSource<Employee>(employees);
    } catch (error) {
      console.log('Error fetching employee data:', error);
    }
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      maxHeight: 'fit-content',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.createEmployee(result);
      }
    });
  }

  openEditDialog(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      maxHeight: 'fit-content',
      data: { mode: 'edit', employee: employee }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.updateEmployee(result);
      }
    }); 
  }

  async createEmployee(employee: Employee) {
    const currentData = this.employees.data;
    const highestId = Math.max(...currentData.map(emp => emp.id));
    const newId = highestId + 1;
    employee.id = newId;
    currentData.push(employee);//ArrayPush
    this.employees.data = currentData;
  }

  async updateEmployee(updatedEmployee: Employee) {
    const currentData = this.employees.data;
    const index = currentData.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      currentData[index] = updatedEmployee;
      this.employees.data = currentData;
    }
  }

  async deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      const currentData = this.employees.data;
      const index = currentData.findIndex(emp => emp.id === id);
      if (index !== -1) {
        currentData.splice(index, 1);//splice
        this.employees.data = currentData;
      }
    }
  }
// ...


arrayForEach() {
  const currentData = this.employees.data;
  const length = currentData.length;//ArrayLength
  console.log("ArrayLength:" + length);
  currentData.forEach((employee, index) => {//ArrayForEach
    const employeeIndex = currentData.indexOf(employee);//ArrayIndexOf
    console.log(`ArrayForEachEmployee[${employeeIndex}]: ${employee.firstName} ${employee.lastName}`);
  });
   
}


arrayReduce() {
  const currentData = this.employees.data;
  const totalAge = currentData.reduce((accumulator, employee) => accumulator + employee.age, 0);
  //alert(`Total Age: ${totalAge}`);
  console.log("Total Age using ArrayReduce:"+totalAge);
}

arrayFilter() {
  const currentData = this.employees.data;
  const sortedArray = currentData.sort((a, b) => a.age - b.age);//ArraySort
  const sortedEmployees = sortedArray.map(employee => `${employee.firstName} : ${employee.age} `)//ArrayMap
  console.log("ArraySort:"+sortedEmployees);
  const filteredArray = sortedArray.filter(employee => employee.age > 30);//ArrayFilter
  const filteredEmployees = filteredArray.map(employee => `${employee.firstName}_${employee.lastName} (${employee.age})`);
 // alert(`Filtered Employees: ${filteredEmployees.join(', ')}`);
 console.log("ArrayFiltered:"+filteredEmployees);
 this.employees.data = filteredArray;
}

arrayIncludes() {
  const currentData = this.employees.data;

  // User input
  const name = prompt('Enter a name:');

  const isEmployeeIncluded = currentData.some(employee => employee.firstName === name);//ArraySome

  if (isEmployeeIncluded) {
    const index = currentData.findIndex(employee => employee.firstName === name);//FindIndex
    console.log(`The name "${name}" is included at index ${index}`);
  } else {
    console.log(`The name "${name}" is not included in the array`);
  }
  
  console.log("ArrayIsInclude:" + isEmployeeIncluded);
}
arrayFind() {
  const currentData = this.employees.data;
  const ageString = prompt('Enter Age');
  const age = ageString !== null ? parseInt(ageString, 10) : 0;
   const foundEmployee = currentData.find(employee => employee.age > age); //ArrayFind
   // alert(`Found Employee: ${JSON.stringify(foundEmployee)}`);
  console.log("ArrayFind: " + (foundEmployee?.firstName || "No employee found"));
  }

arrayPop(){
  const currentData = this.employees.data;
  const poppedElement = currentData.pop();
  alert(`Popped element: ${poppedElement?.firstName}`);
  this.employees.data = [...currentData]; 
}

executeArrayMethods() {
  this.arrayPop();
  this.arrayForEach();
  this.arrayReduce();
  this.arrayFilter();
  this.arrayIncludes();
  this.arrayFind();
  
  
}


}

