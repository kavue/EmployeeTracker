INSERT INTO department (name) 
VALUES ('Data Services'),
       ('Human Resources'),
       ('Marketing'),
       ('Sales'),
       ('Product Development');

INSERT INTO role (title, salary, department_id)
VALUES ('Data Entry Clerk', 45000, 1),
       ('Human Resources Coordinator', 60000, 2),
       ('Marketing Manager', 75000, 3),
       ('Sales Associate', 80000, 4),
       ('Software Developer', 90000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('August', 'Lee', 1, NULL),
       ('Eris', 'Love', 2, 1),
       ('Echo', 'Anthony', 3, 2),
       ('David', 'White', 4, 3),
       ('Eve', 'Vue', 5, 4);