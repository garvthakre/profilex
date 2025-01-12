const  mongoose = require('mongoose');
const signup = new mongoose.Schema({
    name: {type:'string',required:true},
 email: {type:'string',required:true,unique:true},
 password: {type:'string',required:true}
})

const user = mongoose.model('User',signup);

module.exports = user;