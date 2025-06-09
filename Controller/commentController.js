const Post = require('../Models/postModel')
const Comment = require('../Models/commentModel')

const createComment = async (req,res) => {
    try {
        const { post, user, body } = req?.body;
        const newComment = new Comment({ post, user, body })
        const savedComment = await newComment.save();

        // find the post by ID ,add the new comment to its comments array
        //  Update the post with the new comment reference
        const updatedPost = await Post.findByIdAndUpdate(
            post, { $push: { comments: savedComment._id } },
            { new: true }  // Return the updated post
        ).populate('comments');  // Populate the comments array

        res.status(201).json({
            success: true,
            message: 'Comment created successfully',
            // comment: savedComment,
            post: updatedPost
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: 'Error creating comment',
            error: err.message
        });
    }
}
module.exports = {createComment};