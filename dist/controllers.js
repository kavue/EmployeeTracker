import pool from './db.js';
// Department-related queries
export const getAllDepartments = async () => {
    const result = await pool.query('SELECT id, name FROM department');
    return result.rows;
};
export const addDepartment = async (departmentName) => {
    const result = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [departmentName]);
    return result.rows[0];
};
// Role-related queries
export const getAllRoles = async () => {
    const result = await pool.query('SELECT id, title, salary, department_id FROM role');
    return result.rows;
};
export const addRole = async (roleName, salary, departmentId) => {
    const result = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [roleName, salary, departmentId]);
    return result.rows[0];
};
// Employee-related queries
export const getAllEmployees = async () => {
    const result = await pool.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee');
    return result.rows;
};
export const addEmployee = async (firstName, lastName, roleId, managerId) => {
    const result = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, lastName, roleId, managerId]);
    return result.rows[0];
};
// Update employee's role
export const updateEmployeeRole = async (employeeId, newRoleId) => {
    const result = await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [newRoleId, employeeId]);
    return result.rows[0];
};
