const Blog = require("../models/entities/blogModel");

// CREATE route
const insertBlog = async (req, res) => {
  const { title, cover_image, content } = req.body;
  try {
    const newBlog = await Blog.create({ title, cover_image, content });
    return res.status(200).json({
      success: true,
      payload: newBlog,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// READ ALL route
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    return res.status(200).json({
      success: true,
      payload: blogs,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// READ route
const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      return res.status(200).json({
        success: true,
        payload: blog,
      });
    } else {
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// UPDATE route
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, cover_image, content } = req.body;
  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.update({ title, cover_image, content });
      return res.status(200).json({
        success: true,
        payload: blog,
      });
    } else {
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// DELETE route
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.destroy();
      return res
        .status(200)
        .json({ success: true, message: "Blog post deleted" });
    } else {
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  insertBlog,
  updateBlog,
  deleteBlog,
};
