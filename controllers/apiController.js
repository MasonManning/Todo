var bodyParser = require("body-parser")
var Todo = require('../models/todoModel')

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todo/:uname', function(req,res) {
        Todo.find({username: req.params.uname }, function(err, todo){
            if(err) throw err;
            res.send(todo);
        });
    });

    app.get('/api/todo/:id', function(req,res){
        Todo.findById({_id: req.params.id}, function(err,todo){
            if(err) throw err;

            res.send(todo);
        });
    });

    app.post('/api/todo', function(req, res) {
        console.log(req.body)
        console.log(req.body.todo)
        console.log(req.body.isDone)
        if(req.body.id){
            Todo.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
            }, function(err, todo){
                if(err) throw err;
                    res.send('success');
            })
        }
        else{
            var newTodo = Todo({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone
            });
            newTodo.save(function(err) {
                if(err) throw err;
                res.send('Success');
            });
        }
    })
    app.delete('/api/todo', function(req, res) {
        Todo.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;  
            res.send('Success');
        })
    })
    app.get('/api/todo', function(req,res) {
        Todo.find({}, function(err, todo){
            if(err) throw err;
            res.send(todo);
        });
    })
}