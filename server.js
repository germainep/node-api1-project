const express = require('express');
const db = require('./database.js');
const server = express();

server.get('/api/users', (req, res) => {
    console.log(db);
    const users = db.getUsers();
    res.json(users);
});

server.get('/api/users/:id', (req, res) => {
    const userId = req.param.id;
    const user = db.getUserById(userId);

    if (user) {
        res.json(user);
    }
    res.status(404).json({ message: 'user not found' });
});

server.post('/api/users', (req, res) => {
    const newUserName = req.body.name;
    const newUserBio = req.body.bio;
});

server.listen(8080, () => {
    console.log('listening on port 8080');
});
