const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peopleSavedSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : false
    }
})

module.exports = mongoose.model("PeopleSaved", peopleSavedSchema, "peopleSaved");
