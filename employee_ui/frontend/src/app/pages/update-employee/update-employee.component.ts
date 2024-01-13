import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {

  constructor(private service: EmployeeService,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    private router: Router) { }

  qId = 0;
  quiz;
  categories;

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['id'];
    console.log(this.qId)
    this.service.findById(this.qId).subscribe(
      (data) => {
        this.quiz = data;
        console.log(this.quiz)
      },
      (error) => {
        console.log(error)
      }
    )
  
  }
  //update quiz on submitting
  public updateEmployee(){
    
    //validate before updating....
    this.service.updateEmployee(this.quiz).subscribe(
      (data)=>{
        this.router.navigate(['admin/employees'])
        this.snack.open('Successfully Updated Quiz','',{
          duration: 3000
        })
      },
      (error)=>{
        // console.log(error)
        this.snack.open('Some Error Occurred','',{
          duration: 3000
        })
      }
    )
      
    }

}
