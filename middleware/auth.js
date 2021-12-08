const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  //check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
