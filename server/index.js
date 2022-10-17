const express = require("express");
const app     = express();
const sqldb   = require("./model/sql.js");
const nosql   = require("./model/nosql.js");
const cors       = require("cors");
const { config } = require("dotenv");

const morgan     = require('morgan');
const fs         = require('fs');
const path       = require('path');

config();
app.use(morgan('common', {stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const corsOptions ={
    origin:'*',  //https://mighty-dusk-25399.herokuapp.com/
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: "GET,POST",  //    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,

}  
app.use(cors(corsOptions))

//const welcome = require('./routes/welcome');
//const logs    = require('./routes/logs');
const cars       = require('./routes/cars');
const register   = require('./routes/register');
//const test    = require('./routes/test');

// routes

//app.use('/',welcome);
//app.use('/logs',logs);
app.use('/cars',cars);
app.use('/register',register); //sign up route
//app.use('/test',test);    // test route→only recieves output, console log for debugging

app.get("/signuptoken/:id",(req,res)=>{
    res.send(req.params.id);
});
app.get("/forgotpassword/:id",(req,res)=>{
    res.send(req.params.id);
});


app.get("/token", (req, res) => {
    res.send(process.env.token);
} );


const port = process.env.port;
app.listen(port,()=>{
    console.log("server started at port: " + port);
})