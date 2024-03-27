package com.bookstore.repository;

import com.bookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import javax.transaction.Transactional;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {
    @Query("select books from Book books")
    List<Book> getBooks();

    @Transactional
    @Modifying
    @Query("update Book b set b.inventory=(b.inventory+:diff) where b.id=:id")
    void modifyInventory(@Param("id") int id, @Param("diff") int diff);

    @Transactional
    @Modifying
    @Query("update Book b set b.name=:name where b.id=:id")
    void modifyName(@Param("id") int id, @Param("name") String name);

    @Transactional
    @Modifying
    @Query("update Book b set b.author=:author where b.id=:id")
    void modifyAuthor(@Param("id") int id, @Param("author") String author);

    @Transactional
    @Modifying
    @Query("update Book b set b.image=:image where b.id=:id")
    void modifyImage(@Param("id") int id, @Param("image") String image);

    @Transactional
    @Modifying
    @Query("update Book b set b.inventory=:inventory where b.id=:id")
    void modifyStock(@Param("id") int id, @Param("inventory") int inventory);

    @Transactional
    @Modifying
    @Query("update Book b set b.ISBN=:ISBN where b.id=:id")
    void modifyISBN(@Param("id") int id, @Param("ISBN") String ISBN);

    @Transactional
    @Modifying
    @Query("update Book b set b.dollar=:dollar where b.id=:id")
    void modifyDollar(@Param("id") int id, @Param("dollar") int dollar);

    @Transactional
    @Modifying
    @Query("update Book b set b.cent=:cent where b.id=:id")
    void modifyCent(@Param("id") int id, @Param("cent") int cent);

    @Transactional
    @Modifying
    @Query("update Book b set b.description=:description where b.id=:id")
    void modifyDescription(@Param("id") int id, @Param("description") String description);
}
