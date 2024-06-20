// Create web server
// 1. Import express
// 2. Create express server
// 3. Create a route for comments
// 4. Create a route for comment by id
// 5. Listen on port 3000

const express = require('express');
const app = express();

const comments = [
    {id: 1, author: 'John Doe', body: 'Hello, World!'},
    {id: 2, author: 'Jane Doe', body: 'Hi, everyone!'}
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        res.json(comment);
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Run: node comments.js
// Open browser and go to http://localhost:3000/comments
// Open browser and go to http://localhost:3000/comments/1
// Open browser and go to http://localhost:3000/comments/2
// Open browser and go to http://localhost:3000/comments/3