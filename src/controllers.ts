import pool from './db.js';

// Department-related queries
export const getAllDepartments = async () => {
  const result = await pool.query('SELECT id, name FROM department');
  return result.rows;
};

export const addDepartment = async (departmentName: string) => {
  const result = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [departmentName]);
  return result.rows[0];
};

// Role-related queries
export const getAllRoles = async () => {
  const result = await pool.query(`
    SELECT role.id AS role_id, role.title, role.salary, department.name AS department_name
    FROM role
    JOIN department ON role.department_id = department.id
  `);
  return result.rows;
};

export const addRole = async (roleName: string, salary: number, departmentId: number) => {
  const result = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [roleName, salary, departmentId]);
  return result.rows[0];
};

// Employee-related queries
export const getAllEmployees = async () => {
  const result = await pool.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee');
  return result.rows;
};

export const addEmployee = async (firstName: string, lastName: string, roleId: number, managerId: number | null) => {
  const result = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, lastName, roleId, managerId]);
  return result.rows[0];
};

// Update employee's role
export const updateEmployeeRole = async (employeeId: number, newRoleId: number) => {
  const result = await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [newRoleId, employeeId]);
  return result.rows[0];
};
