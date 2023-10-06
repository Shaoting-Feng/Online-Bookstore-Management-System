package com.bookstore.daoimpl;

import com.bookstore.dao.UserDao;
import com.bookstore.entity.Book;
import com.bookstore.entity.User;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUser(int id) {
        return userRepository.getOne(id);
    }

    @Override
    public void forbidUser(int id, boolean forbidden) {
        userRepository.updateState(id, forbidden);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.getUsers();
    }

    @Override
    public User checkUser(String name) {
        return userRepository.checkUser(name);
    }

    @Override
    public void save(String username, String password, String address, List<String> emails)
    {
        userRepository.save(new User(username, password, address, emails));
    }
}
