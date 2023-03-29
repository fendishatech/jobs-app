const Blog = require("../models/entities/blogModel");

// CREATE route
const insertBlog = async (req, res) => {
  const { title, content } = req.body;
  const image_path = req.file.path;
  const cover_image = `${req.protocol}://${req.get("host")}/${image_path}`;

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
  const ITEMS_PER_PAGE = 1;
  try {
    // const { page  } = req.query || 1;
    const { page = 1 } = req.query;

    const count = await Blog.count();
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    if (page > totalPages) {
      return res.status(500).json({
        success: false,
        message: "Page number exceeds the available amount",
      });
    }

    const blogs = await Blog.findAll({
      limit: ITEMS_PER_PAGE,
      offset: (page - 1) * ITEMS_PER_PAGE,
    });

    return res.status(200).json({
      success: true,
      payload: blogs,
      pagination: {
        count: count,
        totalPages: totalPages,
      },
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
