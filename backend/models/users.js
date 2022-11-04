const mongoose =require ('mongoose');
//create user schema and role

const userSchema = mongoose.Schema({
    name:String,
    lastName : String,
    age:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Custommer"
    }
});

module.exports = mongoose.model("user",userSchema)
