var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

/* var logger = function(req,res,next){
    console.log("logging ....!!!!");
    next();
}

app.use(logger);
*/

var users = [{
    name : "Hungry monkey",
    age : 12
},
{
    name : "Heath",
    age : 20
},
{
    name : "Gabe Newell",
    age : 56
}
]

// view engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

//body parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//locating static directory to store static resources
app.use(express.static(path.join(__dirname,'public')));

app.get("/", function(req,res){
    res.render("index", {
        users ,
        title : "Customers"
    });
})

app.listen(3030, function(){
    console.log("Server started on port 3030....");
});