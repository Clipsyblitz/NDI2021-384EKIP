const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rescueReportSchema = new Schema({
  period: {
    type: String,
    required: true,
  },
  numberOfDeaths: {
    type: Number,
    required: true,
  },
  numberOfSeaTrips: {
    type: Number,
    required: true,
  },
  numberOfPeopleSaved: {
    type: Number,
    required: true,
  },
  numberOfCrewSaved: {
    type: Number,
    required: true,
  },
  seaTrips: [
    {
      type: Schema.Types.ObjectId,
      ref: "seaTrip",
    },
  ],

  century: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "RescueReport",
  rescueReportSchema,
  "rescueReport"
);
