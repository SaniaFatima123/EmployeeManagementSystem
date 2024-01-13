package com.example.employeems.service;

import com.example.employeems.entity.security.User;
import com.example.employeems.entity.security.UserRole;
import com.example.employeems.exception.UserAlreadyExists;
import com.example.employeems.exception.UserNotFoundException;

import java.util.Set;

public interface IUserService {
    User createUser(User user, Set<UserRole> userRoles) throws UserAlreadyExists;
    //get user by username
    User getUser(String username) throws UserNotFoundException;
    void deleteUserById(Long id);
}