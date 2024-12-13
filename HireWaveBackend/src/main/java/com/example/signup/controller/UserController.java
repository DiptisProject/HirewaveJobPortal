package com.example.signup.controller;

import com.example.signup.dto.LoginRequestDTO;
import com.example.signup.dto.UserDto;
import com.example.signup.entity.User;
import com.example.signup.service.UserService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserDto userDto) {
        String response = userService.registerUser(userDto);
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequestDTO loginRequest) {
        User response = userService.loginUser(loginRequest);
        return ResponseEntity.ok(response);
    }
    
}