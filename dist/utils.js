import pool from './db.js';
// Function to validate salary input
export const validateSalary = (input) => {
    // Check if the input is a valid positive number
    const salary = parseFloat(input);
    if (isNaN(salary) || salary <= 0) {
        return 'Please enter a valid positive number for salary.';
    }
    return true;
};
export const displayTable = (rows, columns) => {
    // Find the maximum length of data for each column
    const columnWidths = columns.map(col => {
        const maxDataLength = Math.max(...rows.map(row => String(row[col]).length));
        return Math.max(col.length, maxDataLength); // Ensure header is considered
    });
    // Function to format a single row to match column widths
    const formatRow = (row) => {
        return columns.map((col, i) => String(row[col]).padEnd(columnWidths[i])).join(' | ');
    };
    // Print headers
    console.log(columns.map((col, i) => col.padEnd(columnWidths[i])).join(' | '));
    console.log('-'.repeat(columns.map((col, i) => columnWidths[i]).reduce((a, b) => a + b + 3, 0))); // Adjust for separator
    // Print rows
    rows.forEach(row => console.log(formatRow(row)));
};
export const getDepartmentChoices = async () => {
    const departments = await pool.query('SELECT id, name FROM department');
    return departments.rows.map((dept) => ({ name: dept.name, value: dept.id }));
};
export const getRoleChoices = async () => {
    const roles = await pool.query('SELECT id, title FROM role');
    return roles.rows.map((role) => ({ name: role.title, value: role.id }));
};
export const getManagerChoices = async () => {
    const employees = await pool.query('SELECT id, first_name, last_name FROM employee');
    return employees.rows.map((emp) => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
};
export const getEmployeeChoices = async () => {
    const employees = await pool.query('SELECT id, first_name, last_name FROM employee');
    return employees.rows.map((emp) => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
};
