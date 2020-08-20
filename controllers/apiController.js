const bodyParser = require("body-parser")
var Todos = require('../models/todoModel')

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todo', function(req,res) {
        var test = {
            username: "test1",
            todo: "test mongodb and mongoose",
            isDone: false
        }
        Todos.create(test, function (err, result) {
                res.send(result)
        })
    })
}