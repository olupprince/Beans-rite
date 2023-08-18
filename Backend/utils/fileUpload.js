const multer = require('multer');
const path = require('path');

// Storage configuration for foodImg
const foodImgStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './foodImgFolder'); // Set the destination folder for foodImg
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
// Multer middleware for foodImg
const foodImgUpload = multer({ storage: foodImgStorage }).single('foodImg');

module.exports = { foodImgUpload };
