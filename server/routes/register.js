const express  = require('express');
const app      = express();
const router   = express.Router();
const register = require("../controllers/registration");

const {
    signup_duplicateID, 
    network_error
} = require("../controllers/messages");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

router
    .route('/')
    .get((req,res)=>{
        res.send({
            status:200,
            route:"/register"
        })
    })
    .post((req,res)=>{
        const car  = register(req.body);
        const Car  = require("../model/registerCar");
        const car1 = new Car(car);
        car1.save()
        .then(
            (data)=>{
                console.log(data)
                res.send(data);
            }
        )
        .catch(
            (err)=>{
                if (err.message.includes("duplicate")){
                    res.send(signup_duplicateID)
                }
                else{
                    res.send(network_error)
                }
            }
        )
        
    });

module.exports = router;
// sql =
// CREATE TABLE `cars`.`aa-3214` ( `id` INT(8) NOT NULL AUTO_INCREMENT ,  `x` FLOAT(12) NOT NULL ,  `y` FLOAT(12) NOT NULL ,  `ac` INT(0) NOT NULL ,  `engine` VARCHAR(12) NOT NULL ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;

