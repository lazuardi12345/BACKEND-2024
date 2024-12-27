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

  static findById(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM students WHERE id = ?';
      db.query(sql, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length === 0) {
            resolve(null);
          } else {
            resolve(results[0]);
          }
        }
      });
    });
  }

  static update(id, data) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE students SET nama = ?, nim = ?, email = ?, jurusan = ?, updated_at = NOW() 
                   WHERE id = ?`;
      const values = [data.nama, data.nim, data.email, data.jurusan, id];
      db.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve({ id, ...data, updated_at: new Date() });
        }
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM students WHERE id = ?';
      db.query(sql, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve({ message: `Student with id ${id} has been deleted.` });
        }
      });
    });
  }
}

module.exports = Student;
