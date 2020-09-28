//importar o mongoose
var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

// conexão local
var mongoDB_URI = 'mongodb://127.0.0.1:27017/crud';
mongoose.connect(mongoDB_URI, { useNewUrlParser:true })

var db = mongoose.connection

db.on('connected',() => {
    console.log('Mongoose connected to' + mongoDB_URI)
})
db.on('disconected',() => {
    console.log('Mongoose disconected to' + mongoDB_URI)
})
db.on('error',(err) => {
    console.log('Mongoose error' + err)
})