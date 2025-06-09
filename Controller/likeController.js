
// import models
const Like = require('../Models/likeModel')
const Post = require('../Models/postModel')

const likesPost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const newLikes = new Like({ post, user })
        const saveLikes = await newLikes.save()

        // update the post collection on basis this
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLikes._id } }, { new: true }).populate('likes');

        res.status(201).json({
            success: true,
            message: 'Liked successfully',
            posts: updatePost
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'Error fetching Like',
            error: err.message
        })
    }
}

const unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;
        // find and delte like 
        const dltLike = await Like.findOneAndDelete({ post: post, _id: like })

        // update the post collection
        const updateunlikePost = await Post.findByIdAndUpdate(post, { $pull: { likes: dltLike._id } }, { new: true })
        res.status(201).json({
            success: true,
            message: 'UnLiked successfully',
            posts: updateunlikePost
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'Error fetching unLike',
            error: err.message
        })
    }
}


module.exports = { likesPost,unlikePost };