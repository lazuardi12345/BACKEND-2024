// Import Model Student
const Student = require("../models/Student");

class StudentController {
  /**
   * Method untuk mendapatkan semua data students.
   */
  async index(req, res) {
    try {
      const students = await Student.all();
      res.status(200).json({
        message: "Menampilkan semua students",
        data: students,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengambil data students",
        error: error.message,
      });
    }
  }

  /**
   * Method untuk menambahkan data student baru.
   */
  async store(req, res) {
    try {
      const { nama, nim, email, jurusan } = req.body;

      // Validasi input
      if (!nama || !nim || !email || !jurusan) {
        return res.status(400).json({
          message: "Semua data (nama, nim, email, jurusan) harus diisi!",
        });
      }

      // Tambahkan data ke database
      const newStudent = await Student.create({ nama, nim, email, jurusan });
      res.status(201).json({
        message: "Berhasil menambahkan data student",
        data: newStudent,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal menambahkan data student",
        error: error.message,
      });
    }
  }

  /**
   * Method untuk mendapatkan data student berdasarkan ID.
   */
  async show(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findById(id);

      if (!student) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
      }

      res.status(200).json({
        message: `Menampilkan student id ${id}`,
        data: student,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mendapatkan data student",
        error: error.message,
      });
    }
  }

  /**
   * Method untuk mengupdate data student berdasarkan ID.
   */
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nama, nim, email, jurusan } = req.body;

      // Validasi input
      if (!nama && !nim && !email && !jurusan) {
        return res.status(400).json({
          message: "Setidaknya satu data (nama, nim, email, jurusan) harus diisi!",
        });
      }

      const student = await Student.findById(id);
      if (!student) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
      }

      const updatedStudent = await Student.update(id, { nama, nim, email, jurusan });
      res.status(200).json({
        message: `Berhasil mengupdate student id ${id}`,
        data: updatedStudent,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengupdate data student",
        error: error.message,
      });
    }
  }

  /**
   * Method untuk menghapus data student berdasarkan ID.
   */
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findById(id);

      if (!student) {
        return res.status(404).json({ message: "Student tidak ditemukan" });
      }

      await Student.delete(id);
      res.status(200).json({
        message: `Berhasil menghapus student id ${id}`,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal menghapus data student",
        error: error.message,
      });
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
