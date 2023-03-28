const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/blogs");
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, req.body.title + "-" + Date.now() + extension);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB file size limit
  },
});

module.exports = upload;
