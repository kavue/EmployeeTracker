# Employee Tracker

A command-line application for managing a company's employee database. The application is built with **Node.js**, **Inquirer**, and **PostgreSQL**, allowing users to interact with a database to track and manage employee details.

## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Description
The **Employee Tracker** application allows users to:
- View all departments, roles, and employees in the company.
- Add new departments, roles, and employees.
- Update employee roles.
- Use a PostgreSQL database to store all the data.

The application is built to be used through the command line, and it provides an easy-to-navigate interface using the Inquirer package.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend of the application.
- **Inquirer**: A package for handling user prompts and making the command-line interface interactive.
- **PostgreSQL**: The relational database used to store employee data.
- **TypeScript**: For type safety and code structure.
- **dotenv**: For managing environment variables like database credentials.

## Installation

1. Clone the repository:
- git clone [enter the repository url]
- cd employeetracker
2. Install dependencies: npm install
3. Create a .env file at the root of the project and add your database credentials:  
- DB_USER=your_db_user
- DB_PASSWORD=your_db_password
- DB_NAME=employee_db
4. Run the schema.sql fiel to create the necesscary tables3
5. Seed the database with the initial data by running it. 

## Usage
Run the application by executing the following command: npm start

## Features 
- View all departments: See the list of all departments in the company.
- View all roles: View roles within the company, including salary and department.
- View all employees: View a list of all employees, including their roles and managers.
- Add a department: Add a new department to the company.
- Add a role: Add a new role with a salary and assign it to a department.
- Add an employee: Add a new employee to the company, assign them a role, and optionally assign a manager.
- Update employee role: Change an employee’s role within the company.

## License
This project is not covered by any license. 