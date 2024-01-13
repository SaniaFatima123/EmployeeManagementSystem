import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  //get all employees
  public employees() {
    return this._http.get(`${baseUrl}/emp/findall`);
  }
  //add a employee
  public addEmployee(employee) {
    return this._http.post(`${baseUrl}/emp/`, employee);
  }
  //delete a employee
  public deleteEmployee(qId) {
    return this._http.delete(`${baseUrl}/emp/delete/${qId}`)
  }
  //get a unique employee by id
  public findById(id) {
    return this._http.get(`${baseUrl}/emp/findbyid/${id}`)
  }
  //get array of employee by name
  public findByName(name) {
    return this._http.get(`${baseUrl}/emp/findbyname/${name}`)
  }
  //update employee
  public updateEmployee(employee){
    return this._http.post(`${baseUrl}/emp/updateleave`,employee)
  }
}
