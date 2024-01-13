import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-find-employee',
  templateUrl: './find-employee.component.html',
  styleUrls: ['./find-employee.component.scss']
})
export class FindEmployeeComponent {
  constructor(private service: EmployeeService){}
  id: number;
  name: string;
  employee;
  employees= [];
  findEmployee(id){
    this.service.findById(id).subscribe(
      (data:any)=>{
      
        this.employee = data;
        console.log(this.employee); 
      },
      (error)=>{
        console.log("some error occured while loading quizzes"+ error)
      }
    )
  }
  // finding employee by name
  findEmployeeByName(name){
    this.service.findByName(name).subscribe(
      (data:any)=>{
      
        this.employees = data;
        console.log(this.employees); 
      },
      (error)=>{
        console.log("some error occured while loading employees"+ error)
      }
    )
  }
}
