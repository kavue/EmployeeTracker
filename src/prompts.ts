// src/prompts.ts
import inquirer from 'inquirer';
import pool from './db';
import { displayTable, getDepartmentChoices, getRoleChoices, getManagerChoices, getEmployeeChoices, validateSalary } from './utils';
import { addDepartment, addRole, addEmployee, updateEmployeeRole, getAllDepartments, getAllRoles, getAllEmployees } from './controllers';

// Start the CLI app
export const startApp = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
      ],
    },
  ]);

  switch (action) {
    case 'View all departments':
      const departments = await pool.query(getAllDepartments);
      displayTable(departments.rows, ['ID', 'Department Name']);
      break;

    case 'View all roles':
      const roles = await pool.query(getAllRoles);
      displayTable(roles.rows, ['Role ID', 'Role Name', 'Department', 'Salary']);
      break;

    case 'View all employees':
      const employees = await pool.query(getAllEmployees);
      displayTable(employees.rows, ['ID', 'First Name', 'Last Name', 'Role', 'Department', 'Salary', 'Manager']);
      break;

    case 'Add a department':
      const { departmentName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the department name:',
        },
      ]);
      await pool.query(addDepartment, [departmentName]);
      console.log('Department added!');
      break;

    case 'Add a role':
      const { roleName, salary, departmentId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleName',
          message: 'Enter the role name:',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Enter the salary:',
          validate: validateSalary,  // Ensures the salary input is a positive number
        },
        {
          type: 'list',
          name: 'departmentId',
          message: 'Select the department for the role:',
          choices: await getDepartmentChoices(),
        },
      ]);
      await pool.query(addRole, [roleName, salary, departmentId]);
      console.log('Role added!');
      break;

    case 'Add an employee':
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'Enter the employee\'s first name:',
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'Enter the employee\'s last name:',
        },
        {
          type: 'list',
          name: 'roleId',
          message: 'Select the employee\'s role:',
          choices: await getRoleChoices(),
        },
        {
          type: 'list',
          name: 'managerId',
          message: 'Select the employee\'s manager:',
          choices: await getManagerChoices(),
        },
      ]);
      await pool.query(addEmployee, [firstName, lastName, roleId, managerId]);
      console.log('Employee added!');
      break;

    case 'Update an employee role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        {
          type: 'list',
          name: 'employeeId',
          message: 'Select an employee to update:',
          choices: await getEmployeeChoices(),
        },
        {
          type: 'list',
          name: 'newRoleId',
          message: 'Select the new role for the employee:',
          choices: await getRoleChoices(),
        },
      ]);
      await pool.query(updateEmployeeRole, [employeeId, newRoleId]);
      console.log('Employee role updated!');
      break;

    default:
      break;
  }
};
