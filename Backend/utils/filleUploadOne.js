const multer = require('multer');

// Storage configuration for pulpyImg
const pulpyImgStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './pulpyImgFolder'); // Set the destination folder for pulpyImg
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});



// Multer middleware for pulpyImg
const pulpyImgUpload = multer({ storage: pulpyImgStorage }).single('pulpyImg');

module.exports = pulpyImgUpload;