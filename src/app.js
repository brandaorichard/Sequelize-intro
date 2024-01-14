const express = require('express');
const User = require('./controllers/user.controller')
// hello world
const app = express();
app.use(express.json());

app.get('/health/live', (req, res) => res.sendStatus(200));

app.get('/user', User.getAll);
app.get('/user/:id', User.getById);
app.get('/user/search/:id', User.getByIdAndEmail);
app.post('/user', User.createUser);
app.put('/user/:id', User.updateUser);
app.delete('/user/:id', User.deleteUser);

module.exports = app;