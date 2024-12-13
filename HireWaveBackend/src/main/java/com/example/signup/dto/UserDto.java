package com.example.signup.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private Long id; // Added for unique identification of users in getAllUsers response

    @NotBlank
    @Pattern(regexp = "^[a-zA-Z][a-zA-Z0-9_]*$", message = "Invalid username.")
    private String name;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters long.")
    private String password;

    @NotBlank
    private String userType;
}
