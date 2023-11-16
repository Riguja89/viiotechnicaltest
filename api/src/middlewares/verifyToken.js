const jwt = require("jsonwebtoken");
const userSchema = require("../models/user");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) return res.status(403).json({ message: "Whitout token" });
    const decoded = jwt.verify(token, "token");

    req.userId = decoded["_id"];

    const user = await userSchema.findById(req.userId, { password: 0 });

    if (!user) {
      throw new Error("User don't exist");
    } else {
      next();
    }
  } catch (error) {
    error instanceof Error
      ? res.status(401).json({ message: error.message })
      : res.json({ message: error });
  }
};

module.exports = verifyToken;
