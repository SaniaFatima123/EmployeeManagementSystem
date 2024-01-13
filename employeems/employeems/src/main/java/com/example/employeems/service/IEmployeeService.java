package com.example.employeems.service;


import com.example.employeems.entity.Employee;

import java.util.List;


public interface IEmployeeService {

    Employee addEmployee(Employee employee);
    Employee findById(long id);
    List<Employee> findByName(String name);
    Employee updateLeave(Employee employee);
    void delete(long id);
    List<Employee> findAll();

}
