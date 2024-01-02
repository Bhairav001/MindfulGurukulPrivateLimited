const mongoose = require("mongoose");

const crudSchema = mongoose.Schema({
    name:String,
    email:String,
    mobile:String
},{
    timestamps:true
})

const formModel = mongoose.model("crud",crudSchema);

module.exports={
    formModel
}