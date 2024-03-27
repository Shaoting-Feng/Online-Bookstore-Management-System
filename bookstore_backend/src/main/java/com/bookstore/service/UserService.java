package com.bookstore.service;

import com.bookstore.entity.User;
import java.util.List;

public interface UserService {
    User getUser(int userId);
    void forbidUser(int userId, boolean state);
    List<User> getUsers();
    User checkUser(String name);
    void saveUser(String username, String password, String address, List<String> emails);
}
