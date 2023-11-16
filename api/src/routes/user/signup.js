const { Router } = require("express");
const userSchema = require("../../models/user");
const jwt = require("jsonwebtoken");
const bCrypt = require("bcrypt");

const router = Router();

router.post("/signup", async (req, res) => {
  const { name, lastname, email, password } = req.body;

  try {
    if (!name || !lastname || !email || !password) {
      return res
        .status(400)
        .send({ message: "Incomplete fields or wrong name fields" });
    }
    const userFound = await userSchema.findOne({ email: email });
    if (userFound)
      return res.status(400).send({ message: "User already exists" });
    bCrypt.hash(password, 10, async function (err, hash) {
      req.body.password = hash;
      const user = userSchema(req.body);
      const savedUser = await user.save();
      const token = jwt.sign({ _id: savedUser._id }, "token", {
        expiresIn: 60 * 60 * 24,
      });
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.status(200).json({ token, savedUser });
    });
  } catch (error) {
    error instanceof Error
      ? res.status(401).json({ message: error.message })
      : res.json({ message: error });
  }
});

module.exports = router;
