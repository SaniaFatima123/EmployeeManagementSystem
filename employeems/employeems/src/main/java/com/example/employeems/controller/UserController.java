package com.example.employeems.controller;

import com.example.employeems.entity.security.Role;
import com.example.employeems.entity.security.User;
import com.example.employeems.entity.security.UserRole;
import com.example.employeems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.example.employeems.service.IUserService;
import java.util.HashSet;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserRepository imageRepository;

    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
//        user.setProfile("default.png");

        //encoding password with bcryptpasswordencoder
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        Set<UserRole> userRoles = new HashSet<>();

        Role role1 = new Role();
        role1.setRoleId(45L);
        role1.setRoleName("NORMAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role1);

        userRoles.add(userRole);

        User response = userService.createUser(user, userRoles);
        return response;
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) throws Exception {
        return userService.getUser(username);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUserById(id);
    }

}
