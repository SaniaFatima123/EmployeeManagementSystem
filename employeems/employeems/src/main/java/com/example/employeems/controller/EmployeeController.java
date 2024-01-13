package com.example.employeems.controller;

import com.example.employeems.entity.Employee;
import com.example.employeems.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/emp")
public class EmployeeController {
    @Autowired
    private IEmployeeService service;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Employee addEmployee(@RequestBody Employee employee){

        Employee emp = service.addEmployee(employee);
        System.out.println("in controller");
        System.out.println(emp);
        return emp;
    }
    @GetMapping("/findbyid/{id}")
    public Employee findEmployeeById(@PathVariable int id){
        return service.findById(id);
    }
    @GetMapping("/findbyname/{name}")
    public List<Employee> findEmployeeByName(@PathVariable String name){
        return service.findByName(name);
    }
    @PostMapping("/updateleave")
    public Employee updateLeave(@RequestBody Employee employee){
        Employee emp = service.updateLeave(employee);
        return emp;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable long id){
        service.delete(id);
    }
    @GetMapping("/findall")
    public List<Employee> findAllEmployee(){
        return service.findAll();
    }
}
