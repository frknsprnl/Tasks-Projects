const Blog = require("../models/Blog");

exports.getAllPosts = async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", {
    blogs,
  });
};

exports.createPost = async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/");
};

exports.updatePost = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  blog.title = req.body.title;
  blog.detail = req.body.detail;
  blog.save();

  res.redirect("/");
};

exports.deletePost = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
