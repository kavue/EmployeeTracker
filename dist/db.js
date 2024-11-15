import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;
// Load environment variables from .env file
dotenv.config();
const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});
// Test the database connection when the app starts
pool.connect()
    .then(client => {
    console.log('Successfully connected to the database');
    client.release(); // Make sure to release the client back to the pool
})
    .catch(err => {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the process if there is a connection error
});
export default pool;
