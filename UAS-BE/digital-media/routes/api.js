
const express = require("express");
const newsController = require("../controllers/NewsController");


const router = express.Router();


router.get("/", (req, res) => {
  res.send("Hello News API Express");
});



router.get('/news', newsController.getAll);
router.post('/news', newsController.create);
router.put('/news/:id', newsController.update);
router.delete('/news/:id', newsController.delete);
router.get('/news/:id', newsController.getDetail);
router.get('/news/search/:title', newsController.search);
router.get('/news/category/sport', newsController.getSport);
router.get('/news/category/finance', newsController.getFinance);
router.get('/news/category/automotive', newsController.getAutomotive);


module.exports = router;
