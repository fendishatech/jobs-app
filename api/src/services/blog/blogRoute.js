const express = require("express");
const blogController = require("./blogController");
const blogValidator = require("./blogValidator");

const router = express.Router();

router.post("/blogs/", blogValidator, blogController.insertBlog);
router.get("/blogs/", blogController.getBlogs);
router.get("/blogs/:id", blogController.getBlog);
router.put("/blogs/:id", blogValidator, blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
