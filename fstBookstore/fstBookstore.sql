use  fstBookstore;
drop table if exists order_items;
drop table if exists orders;
drop table if exists cart_items;
drop table if exists emails;
drop table if exists users;
drop table if exists books;

create table books (
    id int auto_increment,
    name varchar(63) not null,
    inventory int check ( inventory >= 0 ),
    dollar int check ( dollar >= 0 ),
    cent int check ( cent >= 0 ),
    author varchar(31) not null,
    image varchar(255),
    ISBN char(13) not null,
    description varchar(2047),
    primary key (id)
);

create table users (
    id int auto_increment,
    username varchar(31) not null,
    password varchar(31) not null,
    address varchar(255) not null,
    ident tinyint(1) check ( ident >= 0  && ident <= 1 ),
    forbidden tinyint(1) check ( forbidden >= 0  && forbidden <= 1 ),
    primary key (id)
);

create table cart_items (
    id int auto_increment not null,
    user_id int check ( user_id > 0 ),
    item_id int check ( item_id > 0 ),
    item_num integer check ( item_num > 0 ),
    primary key (id),
    foreign key (user_id) references users (id) on delete cascade,
    foreign key (item_id) references books (id) on delete cascade
);

create table orders (
    id int auto_increment,
    user_id int check ( user_id > 0 ),
    time datetime not null,
    address varchar(255) not null,
    district varchar(255) not null,
    zip char(6) not null,
    email varchar(255) not null,
    primary key (`id`),
    foreign key (user_id) references users(id) on delete cascade
);

create table order_items (
    id int auto_increment,
    order_id int check ( order_id > 0 ),
    item_id int check ( item_id > 0 ),
    item_num int check ( item_num > 0 ),
    dollar int check ( dollar >= 0 ),
    cent int check ( cent >= 0 ),
    image varchar(255),
    name varchar(63) not null,
    primary key (id),
    foreign key (order_id) references `orders`(`id`) on delete cascade,
    foreign key (item_id) references `books`(`id`) on delete cascade
);

create table emails (
    id int auto_increment,
    user_id int check ( user_id > 0 ),
    email varchar(255) not null,
    primary key (id),
    foreign key (user_id) references users (id) on delete cascade
);


insert into `books`
values ('1','Black Cake','19','25','76','Charmaine Wilkerson','https://pic1.zhimg.com/80/v2-431aed3fb9266da0ad03de687145a16f_1440w.jpg?source=d16d100b', '9780593358337',
        'In present-day California, Eleanor Bennett''s death leaves behind a puzzling inheritance for her two children, Byron and Benny: a black cake, made from a family recipe with a long history, and a voice recording. In her message, Eleanor shares a tumultuous story about a headstrong young swimmer who escapes her island home under suspicion of murder. The heartbreaking tale Eleanor unfolds, the secrets she still holds back, and the mystery of a long-lost child challenge everything the siblings thought they knew about their lineage and themselves.Can Byron and Benny reclaim their once-close relationship, piece together Eleanor''s true history, and fulfill her final request to "share the black cake when the time is right"? Will their mother''s revelations bring them back together or leave them feeling more lost than ever?'),
       ('2','C is for Consent','13','13','75','Eleanor Morrison','https://pic1.zhimg.com/80/v2-bfd98f8641f1b42148ed17371a26ac27_1440w.jpg?source=d16d100b', '9780999890806',
        'Morrison provides a valuable service for children and their parents in her tale by showing how consent works and what good boundaries look like. The advice falls in line with today''s parenting experts, who recommend that kids not be forced into unwanted touching; the volume also includes worthwhile discussion questions.'),
       ('3','Effective Java','79','54','99','Joshua Bloch','https://pic3.zhimg.com/80/v2-b027806383df0506731415e149d6d621_1440w.jpg?source=d16d100b', '9780134685991',
        'Java has changed dramatically since the previous edition of Effective Java was published shortly after the release of Java 6. This Jolt award-winning classic has now been thoroughly updated to take full advantage of the latest language and library features. The support in modern Java for multiple paradigms increases the need for specific best-practices advice, and this book delivers. As in previous editions, each chapter of Effective Java, Third Edition, consists of several "items," each presented in the form of a short, stand-alone essay that provides specific advice, insight into Java platform subtleties, and updated code examples. The comprehensive descriptions and explanations for each item illuminate what to do, what not to do, and why. The third edition covers language and library features added in Java 7, 8, and 9, including the functional programming constructs that were added to its object-oriented roots. Many new items have been added, including a chapter devoted to lambdas and streams.'),
       ('4','Python for MBAs','0','42','00','Mattan Griffel','https://pic2.zhimg.com/80/v2-123cf8ed80a0b46fa943b4fcb6884d2b_1440w.jpg?source=d16d100b', '9780231193931',
        'This book is an introduction to programming with Python for MBA students and others in business positions who need a crash course. One of the most popular programming languages, Python is used for tasks such as building and running websites, data analysis, machine learning, and natural-language processing. Drawing on years of experience providing instruction in this material at Columbia Business School as well as extensive backgrounds in technology, entrepreneurship, and consulting, Mattan Griffel and Daniel Guetta teach the basics of programming from scratch. Beginning with fundamentals such as variables, strings, lists, and functions, they build up to data analytics and practical ways to derive value from large and complex datasets. They focus on business use cases throughout, using the real-world example of a major restaurant chain to offer a concrete look at what Python can do. Written for business students with no previous coding experience and those in business roles that include coding or working with coding teams, Python for MBAs is an indispensable introduction to a versatile and powerful programming language.'),
       ('5','A Tour of C++','24','39','99','Bjarne Stroustrup','https://pic1.zhimg.com/80/v2-b69b98371a0ddbb199ec31f9857d4679_1440w.jpg?source=d16d100b', '9780134997834',
        'In A Tour of C++, Second Edition, Bjarne Stroustrup, the creator of C++, describes what constitutes modern C++. This concise, self-contained guide covers most major language features and the major standard-library components--not, of course, in great depth, but to a level that gives programmers a meaningful overview of the language, some key examples, and practical help in getting started. Stroustrup presents the C++ features in the context of the programming styles they support, such as object-oriented and generic programming. His tour is remarkably comprehensive. Coverage begins with the basics, then ranges widely through more advanced topics, including many that are new in C++17, such as move semantics, uniform initialization, lambda expressions, improved containers, random numbers, and concurrency. The tour even covers some extensions being made for C++20, such as concepts and modules, and ends with a discussion of the design and evolution of C++. This guide does not aim to teach you how to program (for that, see Stroustrup''s Programming: Principles and Practice Using C++, Second Edition), nor will it be the only resource you''ll need for C++ mastery (for that, see Stroustrup''s The C++ Programming Language, Fourth Edition, and recommended online sources). If, however, you are a C or C++ programmer wanting greater familiarity with the current C++ language, or a programmer versed in another language wishing to gain an accurate picture of the nature and benefits of modern C++, you can''t find a shorter or simpler introduction than this tour provides.'),
       ('6','The Decameron','10','15','59','Giovanni Boccaccio','https://pic3.zhimg.com/80/v2-f7debaeef8b280412b2d1dd9ea82b683_1440w.jpg?source=d16d100b', '9780393350265',
        'The year is 1348. The Black Death has begun to ravage Europe. Ten young Florentines--seven women and three men--escape the plague-infested city and retreat to the countryside around Fiesole. At their leisure in this isolated and bucolic setting, they spend ten days telling each other stories--tales of romance, tragedy, comedy, and farce--one hundred in all. The result, called by one critic the greatest short story collection of all time (Leonard Barkan, Princeton University) is a rich and entertaining celebration of the medley of medieval life. Witty, earthy, and filled with bawdy irreverence, the one hundred stories of The Decameron offer more than simple escapism; they are also a life-affirming balm for trying times. The Decameron is a joyously comic book that has earned its place in world literature not just because it makes us laugh, but more importantly because it shows us how essential laughter is to the human condition.'),
       ('7','Ajax For Dummies','999','32','54','Holzner','https://images-us.bookshop.org/ingram/9780471785972.jpg?height=500&v=v2', '9780471785972',
        'Even if you weren''t intimidated before, that tidbit is probably enough to make you reach for the Excedrin. Just reach for Ajax For Dummies instead. With screen shots, actual code and explanations, and live Web sites where you can see Ajax applications doing their thing, it will have you using Ajax to create Web applications that look an act like desktop applications in no time. With Ajax, you can speed up and clean up your Web applications. Shoppers at your online store can fill their carts without waiting for multiple page refreshes. Searchers on your sites can get instant results on the same page. This guide takes you on a tour of how Ajax is used today, complete with examples of Ajax applications in action, such as an Ajax-enabled Yahoo! search or an Ajax-based chat application. Then it gives you basics on using JavaScript.'),
       ('8','React Cookbook','999','53','99','Carlos Santana Roldan','https://s2.loli.net/2022/06/26/BPLpmDilVvJ8hZ7.jpg', '9781783980727',
        'The React Cookbook starts with recipes for installing and setting up the React.js environment with the Create React Apps tool. You’ll understand how to build web components, forms, animations, and handle events. You’ll then delve into Redux for state management and build amazing UI designs. With the help of practical solutions, this book will guide you in testing, debugging, and scaling your web applications, and get to grips with web technologies like WebPack, Node, and Firebase to develop web APIs and implement SSR capabilities in your apps. Before you wrap up, the recipes on React Native and React VR will assist you in exploring mobile development with React.'),
       ('9','Spring 5.0 Projects','999','46','99','Nilang Patel','https://static.packt-cdn.com/products/9781788390415/cover/smaller', '9781788390415',
        'This book will show you how to build various projects in Spring 5.0, using its features and third party tools. We''ll start by creating a web application using Spring MVC, Spring Data, the World Bank API for some statistics on different countries, and MySQL database. Moving ahead, you''ll build a RESTful web services application using Spring WebFlux framework. You''ll be then taken through creating a Spring Boot-based simple blog management system, which uses Elasticsearch as the data store. Then, you''ll use Spring Security with the LDAP libraries for authenticating users and create a central authentication and authorization server using OAuth 2 protocol. Further, you''ll understand how to create Spring Boot-based monolithic application using JHipster. Toward the end, we''ll create an online book store with microservice architecture using Spring Cloud and Netﬂix OSS components, and a task management system using Spring and Kotlin.'),
       ('10','Maven Essentials','999','29','99','Prabath Siriwardena','https://images-us.bookshop.org/ingram/9781783986767.jpg?height=500&v=v2', '9781783986767',
        'Maven Essentials is a fast-paced guide to show you the key concepts in Maven and build automation. We get started by introducing you to Maven and exploring its core concepts and architecture. Next, you will learn about and write a Project Object Model (POM) while creating your own Maven project. You will also find out how to create custom archetypes and plugins to establish the most common goals in build automation. After this, you’ll get to know how to design the build to prevent any maintenance nightmares, with proper dependency management. We then explore Maven build lifecycles and Maven assemblies. Finally, you will discover how to apply the best practices when designing a build system to improve developer productivity.'),
       ('11','MySQL','999','42','78','Vikram Vaswani','https://images-us.bookshop.org/ingram/9780072224771.jpg?height=500&v=v2', '9780072224771',
        'Written in conjunction with the MySQL development team, this expert resource covers transactional integrity, disaster recovery, scalability, support for mobile users, Web-based and client/server programming, and much more.'),
       ('12','HTML','999','4','95','Editors of Rea','https://images-us.bookshop.org/ingram/9780738607627.jpg?height=500&v=v2', '9780738607627',
        'Fast Facts at Your Fingertips! REA''s Quick Access Study Charts contain all the information students, teachers, and professionals need in one handy reference. They provide quick, easy access to important facts. The charts contain commonly used mathematical formulas, historical facts, language conjugations, vocabulary and more! Great for exams, classroom reference, or a quick refresher on the subject.'),
       ('13','CSS in Depth','999','51','74','Keith J Grant','https://images-us.bookshop.org/ingram/9781617293450.jpg?height=500&v=v2', '9781617293450',
        'CSS in Depth exposes you to a world of CSS techniques that range from clever to mind-blowing. This instantly useful book is packed with creative examples and powerful best practices that will sharpen your technical skills and inspire your sense of design. You''ll gain new insights into familiar features like floats and units, and experiment with emerging ideas like responsive design and pattern libraries. Bottom line: this book will make you a better web designer and your apps will look fantastic!'),
       ('14','Beginning Json','999','80','49','Ben Smith','https://images-us.bookshop.org/ingram/9781484202036.jpg?height=500&v=v2', '9781484202036',
        'Beginning JSON is the definitive guide to JSON - JavaScript Object Notation - today''s standard in data formatting for the web. The book starts with the basics, and walks you through all aspects of using the JSON format. Beginning JSON covers all areas of JSON from the basics of data formats to creating your own server to store and retrieve persistent data. Beginning JSON provides you with the skill set required for reading and writing properly validated JSON data.');


insert into `users`
values ('1','Michael', '1234', 'Shanghai Jiao Tong University', '0', '0'),
       ('2','Shaoting', '1234', 'Shanghai Jiao Tong University', '0', '1'),
       ('3','admin', '1234', 'Shanghai Jiao Tong University', '1', '0'),
       ('4','Chongye', '1234', 'Shanghai Jiao Tong University', '0', '0'),
       ('5','Huijie', '1234', 'Shanghai Jiao Tong University', '0', '0'),
       ('6','Ruibin', '1234', 'Shanghai Jiao Tong University', '0', '0');

insert into `orders`
values ('1','1','2022-05-14 03:00:00','Shanghai Jiao Tong University','MinHang','200240', 'shaoting.feng@foxmail.com'),
       ('2','1','2022-05-13 03:00:00','Shanghai Jiao Tong University','MinHang','200240', 'shaoting.feng@foxmail.com'),
       ('3','2','2022-06-18 12:50:00','Shanghai Jiao Tong University','MinHang','200240', 'fengshaoting@sjtu.edu.cn'),
       ('4','4','2022-06-24 13:57:00','Shanghai Jiao Tong University','MinHang','200240', 'fengshaoting@sjtu.edu.cn'),
       ('5','5','2022-06-25 13:57:00','Shanghai Jiao Tong University','MinHang','200240', 'fengshaoting@sjtu.edu.cn'),
       ('6','6','2022-06-26 13:57:00','Shanghai Jiao Tong University','MinHang','200240', 'fengshaoting@sjtu.edu.cn');

insert into `order_items`
values ('1','1','1','2','25','76','https://pic1.zhimg.com/80/v2-431aed3fb9266da0ad03de687145a16f_1440w.jpg?source=d16d100b','Black Cake'),
       ('2','1','2','1','13','75','https://pic1.zhimg.com/80/v2-bfd98f8641f1b42148ed17371a26ac27_1440w.jpg?source=d16d100b','C is for Consent'),
       ('3','2','3','2','54','99','https://pic3.zhimg.com/80/v2-b027806383df0506731415e149d6d621_1440w.jpg?source=d16d100b','Effective Java'),
       ('4','2','4','1','42','00','https://pic2.zhimg.com/80/v2-123cf8ed80a0b46fa943b4fcb6884d2b_1440w.jpg?source=d16d100b','Python for MBAs'),
       ('5','3','1','2','25','76','https://pic1.zhimg.com/80/v2-431aed3fb9266da0ad03de687145a16f_1440w.jpg?source=d16d100b','Black Cake'),
       ('6','4','7','1','32','54','https://images-us.bookshop.org/ingram/9780471785972.jpg?height=500&v=v2','Ajax For Dummies'),
       ('7','4','9','1','46','99','https://static.packt-cdn.com/products/9781788390415/cover/smaller','Spring 5.0 Projects'),
       ('8','5','11','1','42','78','https://images-us.bookshop.org/ingram/9780072224771.jpg?height=500&v=v2','MySQL'),
       ('9','5','13','1','51','74','https://images-us.bookshop.org/ingram/9781617293450.jpg?height=500&v=v2','CSS in Depth'),
       ('10','6','14','1','80','49','https://images-us.bookshop.org/ingram/9781484202036.jpg?height=500&v=v2','Beginning Json');

insert into `cart_items`
values ('1', '1', '1', '2'),
       ('2', '1', '2', '1'),
       ('3', '1', '4', '5'),
       ('4', '2', '1', '2'),
       ('5', '4', '2', '1'),
       ('6', '5', '4', '5'),
       ('7', '6', '1', '2');

insert into `emails`
values ('1','1', 'shaoting.feng@foxmail.com'),
       ('2','2', 'fengshaoting@sjtu.edu.cn'),
       ('3','3', 'st.feng.phd@gmail.com'),
       ('4','4', 'fengshaoting@sjtu.edu.cn'),
       ('5','5', 'fengshaoting@sjtu.edu.cn'),
       ('6','6', 'fengshaoting@sjtu.edu.cn');
