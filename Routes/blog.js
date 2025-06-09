const Routes = require('express').Router()

// import controller
const { likesPost, unlikePost } = require('../Controller/likeController')
const { createComment } = require('../Controller/commentController')
const { createPost, getAllpost } = require('../Controller/postController')

/**
 * @swagger
 * /get-all-post:
 *   get:
 *     summary: Retrieve all blog posts
 *     description: Returns a list of all blog posts stored in the database.
 *     tags:
 *       - Blogs
 *     responses:
 *       200:
 *         description: A list of blog posts                 
 *       500:
 *         description: Internal server error
 */
Routes.get('/get-all-post', getAllpost)


/**
 * @swagger
 * /comments/create:
 *   post:
 *     summary: Create a comment on a post
 *     description: Allows users to add a comment to a specific post.
 *     tags:
 *       - Comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - post
 *               - user
 *               - body
 *             properties:
 *               post:
 *                 type: string
 *                 example: 68458ac38b28b5d562a3bd2b
 *               user:
 *                 type: string
 *                 example: keshav
 *               body:
 *                 type: string
 *                 example: ky best bro
 *     responses:
 *       201:
 *         description: Comment created successfully
 *       400:
 *         description: Bad Request – Invalid data
 *       500:
 *         description: Internal Server Error
 */

Routes.post('/comments/create', createComment)

/**
 * @swagger
 * /post/create:
 *   post:
 *     summary: Create a new post
 *     description: Creates a new blog post with a title and body content.
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *             properties:
 *               title:
 *                 type: string
 *                 example: full stacks
 *               body:
 *                 type: string
 *                 example: abhishek is a best
 */

Routes.post('/post/create', createPost)

/**
 * @swagger
 * /like:
 *   post:
 *     summary: Like a post
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               post:
 *                 type: string
 *                 example: 68458ac38b28b5d562a3bd2b
 *               user:
 *                 type: string
 *                 example: ramu
 *     responses:
 *       200:
 *         description: Post liked
 */

Routes.post('/like', likesPost)

/**
 * @swagger
 * /unlike:
 *   post:
 *     summary: Unlike a post
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               post:
 *                 type: string
 *                 example: 68458ac38b28b5d562a3bd2b
 *               user:
 *                 type: string
 *                 example: ramu
 *     responses:
 *       200:
 *         description: Post unliked
 */

Routes.post('/unlike', unlikePost)

module.exports = Routes;