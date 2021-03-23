//************************** */
// Import Dependencies
//************************** */
// Import our todo model
const Todo = require("../models/todo")


//************************** */
// Controller Functions
//************************** */

// Index function for getting all todos and rendering view
const index = (req, res) => {
    res.render("todos/index", {
        todos: Todo.getAll(),
        time: req.time
    })
}

// Show function for getting one todo and rendering view
const show = (req, res) => {
    //return the template todos/show.ejs
    res.render("todos/show", {
        todo: Todo.getOne(req.params.id),
        todoNum: parseInt(req.params.id) + 1,
        index: req.params.id
    })
}

// newTodo(new) function for rendering new todo form
function newTodo (req, res){
    res.render(`todos/new`)
}

module.exports = {
    index,
    show, 
    new: newTodo
}