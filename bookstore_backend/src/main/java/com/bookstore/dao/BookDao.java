package com.bookstore.dao;

import com.bookstore.entity.Book;
import java.util.List;

public interface BookDao {
    List<Book> getBooks();
    Book getBookById(int id);
    List<Book> getBooksByIds(List<Integer> ids);
    void modifyInventory(int id, int diff);
    void changeBook(int id, String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description);
    void addBook(String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description);
    void deleteBook(int id);
}
