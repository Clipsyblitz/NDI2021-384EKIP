const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "RANDOM_TOKEN_SECRET", (error, verifiedToken) => {
    if (error) {
      console.log("Something went wrong during auth");
      return res.status(401).json({
        error: new Error("Invalid request!"),
      });
    } else {
      //We get the user id from the decoded token
      req.adminId = verifiedToken.adminId;
      next();
    }
  });
};
