const Post = require("../models/post");

const registerPost = async (req, res) => {
    if ( !req.body.hashtag || !req.body.text)
        return res
            .status(401)
            .send("Process failed: Incomplete Data.");

    const existingPost = await Post.findOne({ hashtag: req.body.hashtag });
    if (existingPost)
        return res
            .status(401)
            .send("Process failed: Post already exists.");

    const post = new Post({
        userId: req.user._id,
        text: req.body.text,
        hashtag: req.body.hashtag,
        dbStatus: true
    });
    const result = await post.save();
    if (!result)
        return res
            .status(401)
            .send("Failed to register Post.");
    return res.status(200).send({ post });
}

const listPost = async (req, res) => {
    const post = await Post.find({ userId: req.user._id });
    if (!post || post.length === 0)
        return res
            .status(401)
            .send("No Post found");
    return res.status(200).send({ post });
}

module.exports = { registerPost, listPost }