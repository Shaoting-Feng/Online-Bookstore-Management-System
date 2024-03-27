package com.bookstore.service;

import com.bookstore.entity.Book;
import java.util.List;

public interface BookService {
    List<Book> getBooks();
    Book getBookById(int id);
    List<Book> getBooksByIds(List<Integer> ids);
    void changeBook(int id, String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description);
    void addBook(String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description);
    void deleteBook(int id);
}
