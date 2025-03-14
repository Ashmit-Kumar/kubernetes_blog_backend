const express = require('express');
const router = express.Router();
const {getBlog, getBlogById, postBlog, updateBlog, deleteBlog } = require('../Controllers/blogController')

// Create a new post
router.post('/posts', postBlog);

// Get all posts
router.get('/posts', getBlog);

// Get a single post by ID
router.get('/posts/:id', getBlogById);

// Update a post
router.put('/posts/:id', updateBlog);

// Delete a post
router.delete('/posts/:id', deleteBlog);

module.exports = router;
