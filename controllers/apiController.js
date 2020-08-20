const bodyParser = require("body-parser")

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todo', function(req,res) {
        res.send("Get TODO")
    })
}