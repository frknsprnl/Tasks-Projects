const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const blogController = require("./controllers/blogController");
const pageController = require("./controllers/pageController");
require("dotenv").config();

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.HEROKU_ID}:${process.env.HEROKU_PW}@cluster0.bpaqez1.mongodb.net/cleanblog-db?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
