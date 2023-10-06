package com.bookstore.repository;

import com.bookstore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("select user from User user where user.username=:name")
    User checkUser(@Param("name") String name);

    @Query("select users from User users")
    List<User> getUsers();

    @Transactional
    @Modifying
    @Query("update User u set u.forbidden=:forbidden where u.id=:id")
    void updateState(@Param("id") int id, @Param("forbidden") boolean forbidden);
}
