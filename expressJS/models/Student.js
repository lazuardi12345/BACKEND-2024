const db = require('../config/database');

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM students';
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO students (nama, nim, email, jurusan, created_at, updated_at) 
                   VALUES (?, ?, ?, ?, NOW(), NOW())`;
      const values = [data.nama, data.nim, data.email, data.jurusan];
      db.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve({ id: results.insertId, ...data, created_at: new Date(), updated_at: new Date() });
        }
      });
    });
  }  
}

module.exports = Student;