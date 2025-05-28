import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'switchyard.proxy.rlwy.net',
  port: 37724,
  user: 'root',
  password: 'UqrdAmpNzZfyhvRffyKvQdzGyBonOEva',
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool; 