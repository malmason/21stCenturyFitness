DROP DATABASE IF EXISTS workouts_db; 
CREATE DATABASE workouts_db;

-- Create a user for the database

CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'password123';

GRANT ALL PRIVILIGES ON workouts_db.* TO 'appuser'@'localhost';