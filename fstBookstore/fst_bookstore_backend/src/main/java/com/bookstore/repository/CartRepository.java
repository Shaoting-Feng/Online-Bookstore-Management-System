package com.bookstore.repository;

import com.bookstore.entity.Book;
import com.bookstore.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import javax.transaction.Transactional;
import java.util.List;

public interface CartRepository extends JpaRepository<CartItem, Integer> {
    @Query("select cartItem from CartItem cartItem where cartItem.user_id=:userId")
    List<CartItem> getCartItems(@Param("userId") int userId);

    @Query("select cartItem from CartItem cartItem where cartItem.item=:item")
    CartItem checkCartItem(@Param("item") Book item);

    @Transactional
    @Modifying
    @Query("update CartItem cartItem set cartItem.item_num=:itemNum " +
           "where cartItem.user_id=:userId and cartItem.item=:item") // :用来防注入
    void updateItemNum(@Param("itemNum") int itemNum, @Param("userId") int userId, @Param("item") Book item);

    @Transactional
    @Modifying
    @Query("delete from CartItem cartItem where cartItem.user_id=:userId and cartItem.item=:item")
    void deleteItem(@Param("userId") int userId, @Param("item") Book item);
}
