const express = require("express");
const sequelize = require("./services/models/config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");

const routes = require("./services/routes");

// Import Multer config object
const multerConfig = require("./utils/multerConfig");

const app = express();

// MIDDLEWARE
dotenv.config();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
// Set up multer middleware with config options
const upload = multer(multerConfig);

// ROUTES
app.use("/", routes);

// DB AND SERVER
/* ----------------------------- test connection ---------------------------- */
async function testConn() {
  try {
    await sequelize.authenticate();
    const Blog = require("./services/models/entities/blogModel");
    await Blog.sync();
    console.log("MySql Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConn();
/* ----------------------------- test connection ---------------------------- */

app.listen(process.env.PORT, () => {
  console.log(`Listening on port http://localhost:${process.env.PORT}`);
});
