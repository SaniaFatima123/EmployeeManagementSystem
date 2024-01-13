import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(private service: EmployeeService,
    private snack: MatSnackBar) { }
  

 categories = [];

 quizData = {
   name: '',
   skills: '',
   empleaves: ''
 }

//  ngOnInit(): void {
//    this.service.categories().subscribe(
//      (data: any) => {
//        console.log(data);
//        this.categories = data
//      },
//      (error) => {
//        console.log("some error occured while loading categories!!" + error)
//      }
//    )
//  }

 addEmployee() {
   if (this.quizData.name.trim() == '' || this.quizData.name == null) {
     this.snack.open("Name is required !!", '', {
       duration: 3000
     })
     return;
   }
   //validations.......
   //if valid then add the quiz
   this.service.addEmployee(this.quizData).subscribe(
     (data:any)=>{
       this.snack.open("Employee added Successfully",'',{
         duration: 3000
       })
       this.quizData = {
        name: '',
        skills: '',
        empleaves: ''
       },
       (error)=>{console.log("Some error occured while adding Employee")}
     }
   )
 }

}
