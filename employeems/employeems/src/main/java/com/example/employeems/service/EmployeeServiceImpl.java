package com.example.employeems.service;

import com.example.employeems.entity.Employee;

import java.util.List;
import java.util.Optional;

import com.example.employeems.exception.EmployeeNotFoundException;
import com.example.employeems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements IEmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public Employee addEmployee(Employee employee) {
        Employee employee1 = employeeRepository.save(employee);
        return employee1;
    }

    @Override
    public Employee findById(long id) {
        Optional<Employee> emp = employeeRepository.findById(id);
        if(!emp.isPresent())
        {
          throw new EmployeeNotFoundException("Employee not found with id "+id);
        }
        return emp.get();
    }

    @Override
    public List<Employee> findByName(String name) {
        List<Employee> emp = employeeRepository.findByName(name);
        if(emp ==null){
            throw new EmployeeNotFoundException("Student not found with name "+name);
        }
        return emp;
    }

    @Override
    public Employee updateLeave(Employee employee) {
        System.out.println("in ser");
        Employee emp = employeeRepository.save(employee);
        System.out.println("in ser");
        return emp;
    }

    @Override
    public void delete(long id) {
         employeeRepository.delete(findById(id));
    }

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }
}
