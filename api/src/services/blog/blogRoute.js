const express = require("express");
const blogController = require("./blogController");

const router = express.Router();

router.post("/blogs/", blogController.insertBlog);
router.get("/blogs/", blogController.getBlogs);
router.get("/blogs/:id", blogController.getBlog);
router.put("/blogs/:id", blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
