const RescueReport = require("../models/rescueReport");
const SeaTrip = require("../models/seaTrip");
const Boat = require("../models/boat");

module.exports = {
  getRescueReport: async (req, res, next) => {
    try {
      const rescueReport = await RescueReport.find({
        century: req.params.century,
      });

      return res.status(200).json({
        rescueReport: rescueReport,
      });
    } catch (error) {
      console.log(error);
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },

  getSeaTripById: async (req, res, next) => {
    try {
      const seaTripId = req.params.seaTripId;

      const seaTrip = await SeaTrip.findById(seaTripId);

      return res.status(200).json({
        seaTrip: seaTrip,
      });
    } catch (error) {
      console.log(error);
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },

  getBoatById: async (req, res, next) => {
    try {
      const boatId = req.params.boatId;

      const boat = await Boat.findById(boatId);

      return res.status(200).json({
        boat: boat,
      });
    } catch (error) {
      console.log(error);
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },

  getSearch: async (req, res, next) => {
    try {
      const { type, data } = req.params;
      let result;

      switch (type) {
        case "boat":
          console.log(data);
          const boatResult = await Boat.findOne({ name: data });
          result = await SeaTrip.find({
            boat: boatResult._id,
          });
          console.log(result);
          break;
        case "rescuer":
          result = await SeaTrip.findOne({ rescuer: data });
          break;
        default:
          console.log("error type");
      }

      return res.status(200).json({
        seaTrip: result,
      });
    } catch (error) {
      console.log(error);
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },

  postCreateSeaTrip : async (req, res, next) => {
    try {
      const {date, location, type} = req.body;
      const seaTrip = new SeaTrip({
        date : date,
        location : location,
        type : type
      });
      await seaTrip.save();
      return res.status(200).json({
        message: "seaTrip insert successful",
      });

    } catch(error) {
      console.log(error);
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }

  }


};
