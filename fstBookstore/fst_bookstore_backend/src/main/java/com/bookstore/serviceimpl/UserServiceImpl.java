package com.bookstore.serviceimpl;

import com.bookstore.dao.UserDao;
import com.bookstore.entity.User;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public User getUser(int userId)
    {
        return userDao.getUser(userId);
    }

    @Override
    public void forbidUser(int userId, boolean state)
    {
        userDao.forbidUser(userId, state);
    }

    @Override
    public List<User> getUsers() {
        return userDao.getUsers();
    }

    @Override
    public User checkUser(String name)
    {
        return userDao.checkUser(name);
    }

    @Override
    public void saveUser(String username, String password, String address, List<String> emails)
    {
        userDao.save(username, password, address, emails);
    }
}
