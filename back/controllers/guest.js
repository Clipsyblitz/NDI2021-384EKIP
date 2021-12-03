const RescueReport = require("../models/rescueReport");
const SeaTrip = require("../models/seaTrip");

module.exports = {
  getRescueReport: async (req, res, next) => {
    try {
      const rescueReport = await RescueReport.find();

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
};
