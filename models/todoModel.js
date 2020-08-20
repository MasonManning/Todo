var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean
})

Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;