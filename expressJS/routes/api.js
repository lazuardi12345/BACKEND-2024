// Import Student Controller
const StudentController = require("../controllers/StudentController");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello Express");
});

// Route untuk mendapatkan semua data students
router.get("/students", StudentController.index);

// Route untuk mendapatkan data student berdasarkan ID
router.get("/students/:id", StudentController.show);

// Route untuk menambahkan data student baru
router.post("/students", StudentController.store);

// Route untuk mengupdate data student berdasarkan ID
router.put("/students/:id", StudentController.update);

// Route untuk menghapus data student berdasarkan ID
router.delete("/students/:id", StudentController.destroy);

// Export router
module.exports = router;
