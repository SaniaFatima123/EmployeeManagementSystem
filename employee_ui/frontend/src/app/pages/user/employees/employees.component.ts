import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  constructor(private service: EmployeeService,
    private snack: MatSnackBar){}

  employees=[];

  ngOnInit(): void {
   this.getAllEmployees()
  }
  //get all employees
  getAllEmployees(){
    this.service.employees().subscribe(
      (data:any)=>{
      
        this.employees = data;
        console.log(this.employees); 
      },
      (error)=>{
        console.log("some error occured while loading employees"+ error)
      }
    )
  }
  //delete a Employee
  deleteEmployee(qId){
     this.service.deleteEmployee(qId).subscribe(
      (data)=>{
      this.snack.open('successfully deleted','',{
        duration: 3000
      })
      this.getAllEmployees()
      },
      (error)=>{
        this.snack.open('Some Error Occurred While Deleting','',{
          duration: 3000
        })
      }
     )
  }

  updateLeave(id){
    console.log("updating leave of id"+id)
  }
}
