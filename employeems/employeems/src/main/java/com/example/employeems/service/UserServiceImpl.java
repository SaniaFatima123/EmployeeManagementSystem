package com.example.employeems.service;

import com.example.employeems.entity.security.User;
import com.example.employeems.entity.security.UserRole;
import com.example.employeems.exception.UserAlreadyExists;
import com.example.employeems.exception.UserNotFoundException;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import com.example.employeems.repository.UserRepository;
import com.example.employeems.repository.RoleRepository;
@Service
public class  UserServiceImpl implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    //Creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws UserAlreadyExists {
        User local=userRepository.findByUsername(user.getUsername());
        if(local!=null){
            System.out.println("User is already there!!");
            throw new UserAlreadyExists("User is already present!");
        }
        else{
            //create user
            for(UserRole userRole:userRoles){
                roleRepository.save(userRole.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            local=userRepository.save(user);
        }
        return local;
    }


    @Override
    public User getUser(String username) throws UserNotFoundException {
        User user= userRepository.findByUsername(username);
        if(user==null){
            throw new UserNotFoundException("User not found for username "+username);
        }
        return user;
    }

    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

}

