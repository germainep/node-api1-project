const express = require('express')
const shortid = require('shortid')
const cors = require('cors')

const db = require('./database.js')
const server = express()

server.use(express.json())
server.use(cors())

server.get('/api/users', ( req, res ) => {
    const users = db.getUsers()
    res.json(users)
})

server.get('/api/users/:id', ( req, res ) => {
    const userId = req.params.id
    const user = db.getUserById(userId)
    if (!user) {
        res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
});

server.post('/api/users', (req, res) => {
    if (!req.body.name || !req.body.bio) {
        return res.status(404).json({ message: 'Missing information' })
    }
    const newUser = db.createUser({
                                      id: shortid.generate(),
                                      name: req.body.name,
                                      bio: req.body.bio,
                                  })
    res.status(201).json(newUser)
});

server.delete('/api/users/:id', ( req, res ) => {
    const user = db.getUserById(req.params.id)

    if (!user) {
        res.status(404).json({ message: 'user not found' })
    }
    db.deleteUser(user.id)
    res.status(204).end()
})

server.put('/api/users/:id', ( req, res ) => {
    const user = db.getUserById(req.params.id)

    if (user) {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name || user.name,
            bio: req.body.bio || user.bio
        })
        res.json(updatedUser)
    }
    else {
        res.status(404).json({ message: 'User not found' })
    }
})


server.listen(8080, () => {
    console.log('listening on port 8080')
})
