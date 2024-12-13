package com.example.signup.entity;

import com.example.signup.enums.UserType;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required.")
    @Pattern(regexp = "^[a-zA-Z][a-zA-Z0-9_]*$", message = "Invalid username. It must start with a letter and contain only alphanumeric characters and underscores.")
    private String name;

    @NotBlank(message = "Email is required.")
    @Email(message = "Please enter a valid email (e.g., john.doe@example.com).")
    private String email;

    @NotBlank(message = "Password is required.")
    @Size(min = 8, message = "Password must be at least 8 characters long.")
    private String password;

    @Enumerated(EnumType.STRING) // Maps the enum value to its string representation in the database
    @NotNull(message = "User type is required.")
    private UserType userType;
}
