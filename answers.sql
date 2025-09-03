-- Question 1 🧑‍🎓
-- Create a table called student
CREATE TABLE student (
    id INT PRIMARY KEY,       -- id will be the unique number for each student
    fullName VARCHAR(100),    -- fullName will store the student name (max 100 characters)
    age INT                   -- age will store the student’s age as a number
);

-- Question 2 ➕
-- Add 3 students into the table
INSERT INTO student (id, fullName, age) VALUES (1, 'John Doe', 18);
INSERT INTO student (id, fullName, age) VALUES (2, 'Jane Smith', 19);
INSERT INTO student (id, fullName, age) VALUES (3, 'Mike Brown', 21);

-- Question 3 🔄
-- Change the age of the student with id = 2 to 20
UPDATE student
SET age = 20
WHERE id = 2;

-- Extra Task: Create student table with name, age, gender
CREATE TABLE student_extra (
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10)
);

-- Create an index on the age column of student_extra
CREATE INDEX IdxAge
ON student_extra (age);

-- (Optional) Check the table to see results
-- SELECT * FROM student;
