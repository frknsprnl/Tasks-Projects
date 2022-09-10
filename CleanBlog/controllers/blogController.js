const Blog = require("../models/Blog");

exports.getAllPosts = async (req, res) => {
  const page = req.query.page || 1;
  const postsPerPage = 3;
  const totalPosts = await Blog.find({}).countDocuments();

  const blogs = await Blog.find({})
    .sort("-dateCreated")
    .skip((page - 1) * postsPerPage)
    .limit(postsPerPage);

  res.render("index", {
    blogs,
    current: page,
    pages: Math.ceil(totalPosts / postsPerPage),
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
