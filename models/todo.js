const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  text: {type: String, require: true},
  title: {type: String, require: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('ToDoSchema', ToDoSchema);