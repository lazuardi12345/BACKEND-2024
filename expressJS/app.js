const express = require("express");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON dan URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan routing dari routes/api.js
app.use("/", apiRoutes);

// mendefinisikan port
app.listen(3000, () => 
  console.log('Server running at http://localhost:3000'));
