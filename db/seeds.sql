ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
INSERT INTO burger (burger_name) VALUES ("Double Cheeseburger");
INSERT INTO burger (burger_name, devoured) VALUES ("Cheeseburger", true);
