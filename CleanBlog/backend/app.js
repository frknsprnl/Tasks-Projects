const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Blog = require("./models/Blog");

const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");

// TEMPLATE ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));

// MIDDLEWARES
app.use(express.static("../frontend/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", {
    blogs,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.get("/post/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("post", {
    blog,
  });
});

app.post("/blogs", async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
