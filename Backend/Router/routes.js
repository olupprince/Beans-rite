const { Router } = require("express");
const multer = require('multer');

const postFoods = require("../Controllers/postFoods");
const getFoods = require("../Controllers/getFoods")
const get1Food = require("../Controllers/get1Food")

const route = Router();
const postImage = multer({ dest: 'imagesUpload/' });


route.post("/postAllFoods", postImage.single('foodImages'), postFoods);
route.get("/viewMenu", getFoods);
route.get("/viewMenu/:id", get1Food);



module.exports = route;
