const express = require('express');
const router = express.Router();

const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);

// router.get('/', function(req, res) {
//     res.render('todos/index', {
//         todos: Todo.getAll()
//     });
// });



module.exports = router;