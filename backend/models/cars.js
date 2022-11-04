const mongoose = require ('mongoose');

const carsSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    image:{type:[String],
    required:true
},
    payPerDay : {type:Number,
    required:true
},
    fuelType : {
    type : String,
    required:true
},
    bookedTimeSlots : {type:[String],
    default:[]
},
    capacity:{type:Number,
    required:true
},

},{
    timestamps:true
});

module.exports = mongoose.model("Car",carsSchema)