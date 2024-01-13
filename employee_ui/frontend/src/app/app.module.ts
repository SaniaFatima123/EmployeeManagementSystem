import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor, AuthInterceptorProviders } from './services/auth.interceptor';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AdminGuard } from './services/admin.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DatePipe } from '@angular/common';
import { ViewEmployeesComponent } from './pages/view-employees/view-employees.component';
import { EmployeeService } from './services/employee.service';
import { FindEmployeeComponent } from './pages/find-employee/find-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { EmployeesComponent } from './pages/user/employees/employees.component';
import { SearchEmployeeComponent } from './pages/user/search-employee/search-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    ProfileComponent,
    DashboardComponent,
    UserDashboardComponent,
    ViewEmployeesComponent,
    FindEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    UserSidebarComponent,
    UserProfileComponent,
    EmployeesComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule
    
  ],

  providers: [AuthInterceptor, AuthInterceptorProviders, AdminGuard, DatePipe, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
