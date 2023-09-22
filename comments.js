// Create web server
// 1. Create web server
// 2. Create route
// 3. Create handler
// 4. Start server
// 5. Test

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route
// GET /comments
// GET /comments/:id
// POST /comments
// PUT /comments/:id
// DELETE /comments/:id
// GET /comments?postId=1
// GET /comments?authorId=1
app.get('/comments', (req, res) => {
    // 3. Create handler
    // 4. Start server
    const comments = [
        {
            id: 1,
            postId: 1,
            authorId: 1,
            content: 'Anh yeu em',
        },
        {
            id: 2,
            postId: 1,
            authorId: 2,
            content: 'Em yeu anh',
        },
        {
            id: 3,
            postId: 2,
            authorId: 1,
            content: 'Anh yeu em',
        },
        {
            id: 4,
            postId: 2,
            authorId: 2,
            content: 'Em yeu anh',
        },
    ];
    const { postId, authorId } = req.query;
    let filteredComments = comments;
    if (postId) {
        filteredComments = filteredComments.filter((comment) => comment.postId === +postId);
    }
    if (authorId) {
        filteredComments = filteredComments.filter((comment) => comment.authorId === +authorId);
    }
    res.json(filteredComments);
});

// 2. Create route
// GET /comments
// GET /comments/:id
// POST /comments
// PUT /comments/:id
// DELETE /comments/:id
// GET /comments?postId=1
// GET /comments?authorId=1
app.get('/comments/:id', (req, res) => {
    // 3. Create handler
    // 4. Start server
    const comments = [
        {
            id: 1,
            postId: 1,
            authorId: 1,
            content: 'Anh yeu em',
        },
        {
            id: 2,