import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit{

  constructor(private router: Router, private loginService: LoginService, private service: EmployeeService, private snack: MatSnackBar){}

  employees;
  user=null;

  ngOnInit(): void {
    this.service.employees().subscribe(
      (data)=>{
        this.employees = data;
      },
      (error)=>{
        this.snack.open('Some error occurred while loading employees','',{
          duration: 3000
        })
      }
    )
  }
  public logout() {
    this.loginService.isLoginStatusSubject.next(false)

  }
  }


