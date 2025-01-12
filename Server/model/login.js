const  mongoose = require('mongoose');
const Login = new mongoose.Schema({
    name: {type:'string',required:true},
    password: {type:'string',required:true}
})
const old=mongoose.model('old',Login);

module.exports=old;