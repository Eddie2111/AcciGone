const express = require('express');
const app     = express();
const router  = express.Router();
const sqldb   = require("../model/sql");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

router
    .route('/')
    .get((req,res)=>{
        console.log("reached test");
        const car = req.query.carNumber.toString();
        console.log(car);
    // add sql here
    try{
    sqldb.query("SELECT * FROM `"+car+"` ORDER BY `"+car+"`.id DESC", (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results[0]);
    });
}
catch(err){
    console.log("Database error");
    console.log(err.message);
}
   
    })
    .post((req,res)=>{
        console.log(req.body);
        res.send(req.body);
    });

module.exports = router;


