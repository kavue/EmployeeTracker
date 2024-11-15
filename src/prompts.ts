import inquirer from 'inquirer';
import { getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } from './controllers.js';
import { displayTable, getDepartmentChoices, getRoleChoices, getManagerChoices, getEmployeeChoices, validateSalary } from './utils.js'; 
import logo from 'asciiart-logo';

console.log(
  logo({
      name: 'Employee Mangager',
      font: 'Speed',
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: 'white',
      logoColor: 'white',
      textColor: 'white',
  })
  .emptyLine()
  .right('version 3.7.123')
  .emptyLine()
  .render()
);

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
        'Exit',
      ],
    },
  ]);

  switch (action) {
    case 'View all departments':
      const departments = await getAllDepartments();
      displayTable(departments, ['id', 'name']);
      break;    

    case 'View all roles':
      const roles = await getAllRoles();
      displayTable(roles, ['id', 'title', 'salary', 'department']);
      break;

    case 'View all employees':
      const employees = await getAllEmployees();
      displayTable(employees, ['id', 'first_name', 'last_name', 'title', 'department', 'salary', 'manager']);
      break;

    case 'Add a department':
      const { departmentName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the department name:',
        },
      ]);
      await addDepartment(departmentName);
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
          validate: validateSalary,
        },
        {
          type: 'list',
          name: 'departmentId',
          message: 'Select the department for the role:',
          choices: await getDepartmentChoices(),
        },
      ]);
      await addRole(roleName, salary, departmentId);
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
      await addEmployee(firstName, lastName, roleId, managerId);
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
      await updateEmployeeRole(employeeId, newRoleId);
      console.log('Employee role updated!');
      break;

    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
      break;

    default:
      break;
  }

  startApp();
};
