const Todo = require('../models/todo');
const router = require('../routes');

// function part of the following route definition:
const index = function(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
};


module.exports = {
    index
};

