const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peopleSavedSchema = new Schema({
    people : [
        {
            name : {
                type : String,
                required : true
            },
            role : {
                type : String,
                required : false
            }
        }
    ]
})

module.exports = mongoose.model("PeopleSaved", peopleSavedSchema, "peopleSaved");
