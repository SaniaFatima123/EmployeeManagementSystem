import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  constructor(private loginService: LoginService, private router: Router) { }
  

  public logout() {
    this.loginService.isLoginStatusSubject.next(false)

  }
}
