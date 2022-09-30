const mongoose = require("mongoose")

const TrainerSchema = mongoose.Schema({

    name:{type:String, required:true},
    id:Number,
    cool:Boolean,
    topics:[String]

})

const TrainerModel = mongoose.model("Trainers", TrainerSchema)

module.exports = {TrainerModel, TrainerSchema};