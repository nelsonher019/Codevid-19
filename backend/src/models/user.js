const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const {Schema} = mongoose;

const userSchema = new Schema({
    email: String,
    password:String,
    firstname: String,
    last_name: String,
    urlimage:String,
    _id:String,
    incluido: {type: Boolean, default: false},
    DateCreation: {type:Date , default: new Date().toISOString()},
    idGrupo:{type:String},
    elegido:{type:Boolean , default:false}
}); 
userSchema.methods.encryptPassword =  (password) => {
    return   bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
userSchema.methods.comparePassword= function(password) {
   return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('users', userSchema);



