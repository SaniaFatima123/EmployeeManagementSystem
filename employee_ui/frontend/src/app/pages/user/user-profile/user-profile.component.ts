import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = null;
  currentDateTime;
  greet;
  constructor(private login: LoginService, private datepipe: DatePipe,private httpClient: HttpClient){} 


  ngOnInit(): void {
    //here im getting data from localStorage
    this.user = this.login.getUser();
    this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy H:mm');
    const currentHour = parseInt(this.datepipe.transform(new Date(), 'H'), 10);
    if(currentHour>=0 && currentHour<12){
       this.greet = "Good morning!!"
    }
    else if(currentHour>=12 && currentHour<16){
      this.greet = "Good afternoon!!"
    }
    else if(currentHour>=16 && currentHour<20){
      this.greet = "Good evening!!"
    }
    else{
      this.greet = "Good evening!!"
    }
}

}
