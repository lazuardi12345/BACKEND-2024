const mysql = require('mysql');
require('dotenv').config(); // Membaca file .env

// Konfigurasi koneksi database menggunakan variabel dari .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Tes koneksi database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to database!');
});

module.exports = db;
