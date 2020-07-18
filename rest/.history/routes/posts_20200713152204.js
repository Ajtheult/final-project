const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Gets back all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific Post
router.get("/:postId", (req, res) => {
  console.log(req.params.postId);
});

module.exports = router;
