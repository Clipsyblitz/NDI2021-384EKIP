const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boatSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    captain: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Boat", boatSchema, "boat");
