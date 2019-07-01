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

router.post('/edit', (req, res, next) => {
  id = req.body.id
  text = req.body.text
  title = req.body.title
  ToDoSchema.findByIdAndUpdate(id, {title: title, text: text }).then(edit_todo => {
    if (edit_todo) {
        res.json({status: 200});
    }
  })
})

router.post('/delete', (req, res, next) => {
  let id = req.body.id
  ToDoSchema.findById(id).deleteOne().then(     
    res.json({status: 200})
  )
});

module.exports = router;