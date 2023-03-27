const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Blog = sequelize.define("Blog", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cover_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Blog;
