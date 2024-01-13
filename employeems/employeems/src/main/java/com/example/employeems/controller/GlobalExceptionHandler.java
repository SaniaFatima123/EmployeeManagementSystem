package com.example.employeems.controller;

import com.example.employeems.exception.EmployeeNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.example.employeems.exception.UserNotFoundException;
import com.example.employeems.exception.UserAlreadyExists;
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(EmployeeNotFoundException.class)
    public String employeeNotFoundHandler(EmployeeNotFoundException e){
        return e.getMessage();
    }
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(UserAlreadyExists.class)
    private String alreadyExistsExceptionHandler(UserAlreadyExists e){
        return e.getMessage();
    }
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(UserNotFoundException.class)
    private String notFoundExceptionHandler(UserNotFoundException e){
        return e.getMessage();
    }
}
