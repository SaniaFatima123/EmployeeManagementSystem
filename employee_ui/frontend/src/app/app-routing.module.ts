import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewEmployeesComponent } from './pages/view-employees/view-employees.component';
import { FindEmployeeComponent } from './pages/find-employee/find-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserGuard } from './services/user.guard';
import { EmployeesComponent } from './pages/user/employees/employees.component';
import { SearchEmployeeComponent } from './pages/user/search-employee/search-employee.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch:"full"},
{path:"register", component: RegisterComponent, pathMatch:"full"},
{path:"login", component: LoginComponent, pathMatch:"full"},
{path:"admin", component: DashboardComponent, canActivate:[AdminGuard],
children:[
  { path: 'profile', component: ProfileComponent},
  { path: 'find-employee', component: FindEmployeeComponent},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent},
  { path: 'employees', component: ViewEmployeesComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'logout', component: LoginComponent},
]},
{path:"user-dashboard", component: UserDashboardComponent, canActivate: [UserGuard],
children:[
  { path: 'user-profile', component: UserProfileComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'find-employee', component: SearchEmployeeComponent},
]
},]
@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatSnackBarModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
