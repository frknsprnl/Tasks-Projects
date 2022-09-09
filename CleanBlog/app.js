const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const path = require("path");
const Blog = require("./models/Blog");
const blogController = require("./controllers/blogController");
const pageController = require("./controllers/pageController");

const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// ROUTES
app.get("/about", pageController.getAboutPage);
app.get("/posts/:id", pageController.getPostPage);
app.get("/add_post", pageController.getAddPostPage);
app.get("/posts/edit/:id", pageController.getEditPostPage);

app.get("/", blogController.getAllPosts);
app.post("/posts", blogController.createPost);
app.put("/posts/:id", blogController.updatePost);
app.delete("/posts/:id", blogController.deletePost);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
