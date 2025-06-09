// import post modles

const Post = require('../Models/postModel')

const createPost = async (req, res) => {
    try {
        const { title, body } = req.body
        const newPost = new Post({ title, body })
        const savePost = await newPost.save()

        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            post: savePost
        });

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'Error creating post',
            error: err.message
        });
    }
}

const getAllpost = async (req, res) => {
    try {
        const posts = await Post.find().sort().populate('comments').populate('likes')
        res.status(200).json({
            success: true,
            message: 'Posts retrieved successfully',
            posts: posts
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'Error fetching posts',
            error: err.message
        })
    }
}

module.exports = { createPost, getAllpost };