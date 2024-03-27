package com.bookstore.dao;

import com.bookstore.entity.User;
import java.util.List;

public interface UserDao {
    User getUser(int userId);
    void forbidUser(int userId, boolean forbidden);
    List<User> getUsers();
    User checkUser(String name);
    void save(String username, String password, String address, List<String> emails);
}
