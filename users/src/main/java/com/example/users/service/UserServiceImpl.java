package com.example.users.service;

import com.example.users.models.User;
import com.example.users.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Iterable<User> listUsers() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User login(String username, String password) {
        return userRepository.login(username, password);
    }

    @Override
    public HttpStatus deleteUser(Long userId) {
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }
}
