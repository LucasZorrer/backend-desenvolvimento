require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const professoresController = require('./app/controllers/ProfessorController')

app.use(express.json())

const posts = [
    {
        username: 'Pedro',
        title: 'Post 1'
    },
    {
        username: 'Lucas',
        title: 'Post 2'
    }
]


app.get('/professor', professoresController.teste) 
app.post('/professor/create', professoresController.createProfessor )
app.put('/professor/{$id}' , professoresController.alterProfessor)
app.delete('/professor/delete', professoresController.deleteProfessor)

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(6969, () => {
    console.log("Server is running")
})