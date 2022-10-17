const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    driverName: {
        type: String,
        required: true,
    },
    carNumber: {
        type: String,
        required: true,
        unique : true,
    },
    carModel: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    }
}
    ,{collection: 'cars'}
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;


