import { literalMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/components/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup
  constructor(private userService: UserService , private snackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.nameNotAllowed.bind(this), this.whiteSpaceNotAllowed.bind(this)]),
      'password': new FormControl(null, [Validators.required, this.passwordNotAllowed.bind(this)]),
      'firstName': new FormControl(null, [Validators.required, this.nameNotAllowed.bind(this), this.whiteSpaceNotAllowed.bind(this)]),
      'lastName': new FormControl(null, [Validators.required, this.nameNotAllowed.bind(this), this.whiteSpaceNotAllowed.bind(this)]),
      'email': new FormControl("abc@gmail.com", [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, Validators.required),
      'checkbox': new FormControl(null, Validators.requiredTrue)
    })
  }

  onSubmit() {
    //add user using user service
    console.log(this.reactiveForm.value);
    const user = new User(this.reactiveForm.value['username'], this.reactiveForm.value['password'], this.reactiveForm.value['firstName'],
      this.reactiveForm.value['lastName'], this.reactiveForm.value['email'], this.reactiveForm.value['phoneNumber'])
    this.userService.addUSer(user).subscribe((data) => {
      //success
      console.log(data)
      this.snackbar.open("Thank you for registering with EmployeeMS!", "", {
        duration: 4000,

      })
      return;
    },
      (error) => {
        //error
        console.log(error)
      })
    this.reactiveForm.reset({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "abc@gmail.com",
      phoneNumber: "",
      checkbox: ""
    });
  }

  nameNotAllowed(control: FormControl): { [s: string]: boolean } {
    if ((control.value)?.length < 2 || (control.value)?.length > 20) {
      return { 'nameInvalid': true };
    }
    return null;
  }
  whiteSpaceNotAllowed(control: FormControl): { [s: string]: boolean } {
    if ((control.value || '').trim().length == 0) {
      return { 'whitespace': true };
    }
    return null;
  }
  passwordNotAllowed(control: FormControl): { [s: string]: boolean } {
    if ((control.value)?.length < 5) {
      return { 'passwordInvalid': true };
    }
    return null;
  }
}



