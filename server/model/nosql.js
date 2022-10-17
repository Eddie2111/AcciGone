const mongoose   = require('mongoose');
const url        = `mongodb://localhost:27017/AcciGoneProtoType`;
const connection = mongoose.connect(
    url, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => 
        console.log('NOSQL:200')
        )
    .catch(err => 
            console.error('NOSQL:404', err)
            );

module.exports = connection;

