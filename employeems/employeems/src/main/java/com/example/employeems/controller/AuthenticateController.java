package com.example.employeems.controller;

import com.example.employeems.entity.security.JwtRequest;
import com.example.employeems.entity.security.JwtResponse;
import com.example.employeems.entity.security.User;
import com.example.employeems.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.example.employeems.config.*;
import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticateController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    //generate token
    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try{authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
        }
        catch (Exception e){
            e.printStackTrace();
            throw new Exception("User not found");
        }
        //authenticate
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private  void authenticate(String username, String password) throws Exception {
        try
        {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

        }
        catch(DisabledException e){
            throw  new Exception("USER DISABLED" + e.getMessage());
        }
        catch (BadCredentialsException e){
            throw new Exception("Invalid Credentials " + e.getMessage());
        }
    }
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        System.out.println(principal);
        return ((User) this.userDetailsService.loadUserByUsername(principal.getName()));
    }
}