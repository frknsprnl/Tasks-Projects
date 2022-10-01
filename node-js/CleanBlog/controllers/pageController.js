const Blog = require("../models/Blog");

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getPostPage = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("post", {
    blog,
  });
};

exports.getAddPostPage = (req, res) => {
  res.render("add_post");
};

exports.getEditPostPage = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  res.render("edit_post", {
    blog,
  });
};
