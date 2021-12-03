const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");

module.exports = {
  postLogin: async (req, res, next) => {
    try {
      const hashPass = await bcrypt.hash(req.body.password, 12);
      console.log(hashPass);
      const admin = await Admin.findOne({
        email: req.body.email,
      });

      if (admin) {
        const matchRes = await bcrypt.compare(
          req.body.password,
          admin.password
        );

        if (matchRes && admin.token === undefined) {
          return res.status(200).json({
            token: jwt.sign(
              { adminId: admin._id },
              "RANDOM_TOKEN_SECRET",
              { expiresIn: "900s" } //15 mn
            ),
            expiresIn: 900,
            email: admin.email,
          });
        }
      }

      return res
        .status(422)
        .json({ error: { message: "email or password false" } });
    } catch (error) {
      console.log(error);
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },
};
