// TODO 3: Import data students dari folder data/students.js
const students = require('../data/students');

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    res.status(200).json(students);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    const { name, age, major } = req.body;
    const newStudent = {
      id: students.length + 1, // Generate ID otomatis
      name,
      age,
      major,
    };
    students.push(newStudent);
    res.status(201).json({
      message: "Student added successfully",
      data: newStudent,
    });
  }

  update(req, res) {
    // TODO 6: Update data students
    const { id } = req.params;
    const { name, age, major } = req.body;
    const student = students.find((s) => s.id === parseInt(id));

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (name) student.name = name;
    if (age) student.age = age;
    if (major) student.major = major;

    res.status(200).json({
      message: "Student updated successfully",
      data: student,
    });
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    const { id } = req.params;
    const index = students.findIndex((s) => s.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.status(200).json({ message: "Student deleted successfully" });
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
