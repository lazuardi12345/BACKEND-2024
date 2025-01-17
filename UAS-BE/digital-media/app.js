
const express = require("express");
const router = require("./routes/api"); 

require("dotenv").config();


const { APP_PORT = 3000 } = process.env; 


const app = express();


app.use(express.json());


app.use("/api", router); 


app.use((err, req, res, next) => {
  console.error(err.stack);  
  res.status(500).json({ message: "Something went wrong!" }); 
});


app.listen(APP_PORT, () => {
  console.log(`Server running at: http://localhost:${APP_PORT}`);
});
