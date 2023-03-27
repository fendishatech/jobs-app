const express = require("express");
const sequelize = require("./services/models/config/database");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("./services/routes");

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

// ROUTES
app.use("/", routes);

// DB AND SERVER
async function testConn() {
  try {
    await sequelize.authenticate();
    // const Blog = require("./models/entities/blogModel");
    // await Blog.sync();
    console.log("MySql Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConn();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port http://localhost:${process.env.PORT}`);
});
