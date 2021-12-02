const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seaTripSchema = new Schema({
    date : {
        type:  String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    type : {
        type: String,
        required: true
    },
    boss : {
        type: String,
        required: false
    },
    subBoss : {
        type: String,
        required: false
    },
    rescuer : {
        type: String,
        required: false
    },
    numberPersonRescued : {
        type: Number,
        required: false
    },
    passenger : {
        type : Array,
        required: false
    },
    mechanic : {
        type: Array,
        required: false
    },
    boater : {
        type: Array,
        required: false
    },
    boat :
        {
            type: Schema.Types.ObjectId,
            ref: "boat"
        },
    saved : [
        {
            type: Schema.Types.ObjectId,
            ref: "peopleSaved"
        }
    ]
})

module.exports = mongoose.model("SeaTrip", seaTripSchema, "seaTrip");