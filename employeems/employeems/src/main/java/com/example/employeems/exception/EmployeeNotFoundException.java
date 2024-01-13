package com.example.employeems.exception;

public class EmployeeNotFoundException extends RuntimeException{
    public EmployeeNotFoundException(String s){
        super(s);
    }
}
