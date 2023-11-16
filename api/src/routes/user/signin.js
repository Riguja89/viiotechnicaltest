const { Router } = require("express");
const userSchema = require("../../models/user");
const bCrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .send({ message: "Incomplete fields or wrong name fields" });
    const userFound = await userSchema
      .findOne({
        email: email,
      })
      .populate("_id");

    if (!userFound) return res.status(400).json({ message: "User not found" });
    const matchPassword = await bCrypt.compare(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({ token: null, message: "Invalid Password" });

    const token = jwt.sign({ _id: userFound["_id"] }, "token", {
      expiresIn: 60 * 60 * 24,
    });

    const response = {
      user: userFound,
      token,
    };

    res.header("auth-token", token).send(response);
  } catch (error) {
    error instanceof Error
      ? res.status(401).json({ message: error.message })
      : res.json({ message: error });
  }
});

module.exports = router;
