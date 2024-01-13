package com.example.employeems;

import com.example.employeems.entity.security.Role;
import com.example.employeems.entity.security.User;
import com.example.employeems.entity.security.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.example.employeems.service.UserServiceImpl;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class EmployeemsApplication implements CommandLineRunner {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private UserServiceImpl userService;
	public static void main(String[] args) {
		SpringApplication.run(EmployeemsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code...");

//		//hardcode users....ADMIN
//		User user = new User();
//
//		user.setFirstName("Sania");
//		user.setLastName("Fatima");
//		user.setUsername("sania123");
//		user.setPassword(this.bCryptPasswordEncoder.encode("123456"));
//		user.setEmail("sania@gmail.com");
////		user.setProfile("default.png");
//
//		Role role1 = new Role();
//		role1.setRoleId(7L);
//		role1.setRoleName("ADMIN");
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//
//		userRole.setRole(role1);
//
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//
//		User user1 = this.userService.createUser(user,userRoleSet);
//		System.out.println(user1.getUsername());

	}
}
