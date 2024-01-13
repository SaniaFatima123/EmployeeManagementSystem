import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent {
  constructor(private service: EmployeeService){}
  id: number;
  name;
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
        console.log("some error occured while loading quizzes"+ error)
      }
    )
  }

}
