const express = require("express");
const blogController = require("./blogController");
const blogValidator = require("./blogValidator");
const multerMiddleware = require("../../utils/multerMiddleware");

const router = express.Router();

router.post(
  "/blogs/",
  multerMiddleware.single("cover_image"),
  blogValidator,
  blogController.insertBlog
);
router.get("/blogs/", blogController.getBlogs);
router.get("/blogs/:id", blogController.getBlog);
router.put("/blogs/:id", blogValidator, blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
