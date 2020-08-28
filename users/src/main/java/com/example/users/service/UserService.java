package com.example.users.service;

import com.example.users.models.User;
import org.springframework.http.HttpStatus;

public interface UserService {
    public Iterable<User> listUsers();
    public User createUser(User user);
    public User login(String username, String password);
    public HttpStatus deleteUser(Long userId);
}
