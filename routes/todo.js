var express = require('express');
var router = express.Router();
const ToDoSchema = require('../models/todo')



router.post('/todo', (req, res, successCallback) => {
  let request = req.body;
  let newTodoSchema = new ToDoSchema({
    title: request.title,
    text: request.text
  });
  newTodoSchema.save().then(     
        res.json({status: 200})
  )
  res.end()
});

router.get('/todos', (req, res, next) => {  
    ToDoSchema.find({}).sort({
        'title': 'asc'
    }).then(todos => {
      res.json({
          todos: todos})
      })
  });

router.post('/delete', (req, res, next) => {
  let id = req.body.id
  ToDoSchema.findById(id).deleteOne().then(     
    res.json({status: 200})
  )
});

module.exports = router;