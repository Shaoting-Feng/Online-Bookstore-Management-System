# Project Description: Online Bookstore Management System

## Project Overview:

The Online Bookstore Management System is a comprehensive web application designed for both bookstore administrators and customers. It aims to provide efficient book management, purchasing, and order processing capabilities. The system encompasses user management, book management, book browsing, purchasing, order management, and statistical analysis functions.

## Key Features:

### 1. User Management:
   - Administrators can manage user accounts, enabling them to disable or enable user access. Disabled users cannot log in and receive a notification indicating their account status.
   - User authentication and registration processes are included. User registration involves providing a username, password, password confirmation, and email address. The system validates username uniqueness, password matching, and email format.

### 2. Book Management (For Administrators):
   - Administrators can browse the existing book database in a list format, displaying book titles, authors, cover images, ISBN numbers, and stock quantities.
   - A search feature allows administrators to filter books by title for easy retrieval.
   - Administrators can modify various book attributes, including title, author, cover image, ISBN number, and stock quantity.
   - Administrators have the capability to add new books to the database.
   
### 3. Book Browsing (For Customers and Administrators):
   - Both customers and administrators can browse the existing book database in a list format, displaying book titles, authors, cover images, ISBN numbers, and stock quantities.
   - A search feature allows users to filter books by title for easy access.
   - Selecting a book triggers an Ajax-based mechanism to fetch and display detailed book information.

### 4. Purchasing Books:
   - Users can add books to their shopping cart while browsing.
   - Users can review the contents of their shopping cart, displaying all selected books.
   - Upon clicking the purchase button in the cart, the cart is cleared, and the corresponding book stock is reduced accordingly.
   - After purchasing, an order is generated, displayed to the user, and stored in the database.

### 5. Order Management:
   - Customers can view their order history, with search functionality for filtering orders by time range or book name.
   - Administrators can view and manage all orders in the system, with similar search capabilities.

### 6. Statistical Analysis (For Administrators):
   - Administrators can generate sales reports for specific time ranges, displaying book sales volume in descending order. This creates a bestseller list.
   - Administrators can also generate customer expenditure reports, ranking customers by total spending.
   - Customers can view their own purchase statistics, including the number of books purchased, total quantity, and expenditure, for specific time ranges.

## Technical Implementation Requirements:

### 1. Front-End Development:
   - Utilizes React or Vue.js architecture for the front-end.
   - Webpack or similar bundling tools for efficient resource management.

### 2. Back-End Development:
   - Developed using Spring framework (Spring MVC/Bootstrap/ORM) or equivalent.
   - Utilizes Maven or similar build management tools.

### 3. Development Tools:
   - Preferred development environments include IntelliJ or WebStorm for code development.
   - Backend database implemented using MySQL.

The Online Bookstore Management System is designed to streamline bookstore operations, providing both administrators and customers with a user-friendly platform for efficient book purchasing and management.
