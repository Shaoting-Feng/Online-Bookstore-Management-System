package com.bookstore.controller;

import com.bookstore.entity.User;
import com.bookstore.utils.LoginMsg;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Objects;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/getUser")
    public User getUser(@RequestParam("userId") int userId)
    {
        return userService.getUser(userId);
    }

    @RequestMapping("/forbidUser")
    public void forbidUser(@RequestParam("userId") int userId,
                           @RequestParam("state") boolean state)
    {
        userService.forbidUser(userId, state);
    }

    @RequestMapping("/getUsers")
    public List<User> getUsers()
    {
        return userService.getUsers();
    }

    @RequestMapping("/checkUser")
    public LoginMsg checkUser(@RequestParam("name") String name,
                              @RequestParam("password") String password)
    {
        User user = userService.checkUser(name);
        if (user == null) return new LoginMsg(0, 0, "User not found");
        else if (!Objects.equals(user.getPassword(), password)) return new LoginMsg(0, user.getId(), "Wrong password");
        else if (user.getForbidden()) return new LoginMsg(0, user.getId(), "You are not allowed to log in. Please contact an administrator.");
        else if (user.getIdent()) return new LoginMsg(2, user.getId(), "");
        else return new LoginMsg(1, user.getId(), "");
    }

    @RequestMapping("/saveUser")
    public void saveUser(@RequestParam("username") String username,
                         @RequestParam("password") String password,
                         @RequestParam("address") String address,
                         @RequestParam("emails") List<String> emails)
    {
        userService.saveUser(username, password, address, emails);
    }
}

