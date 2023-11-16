const { Router } = require("express");
const axios = require("axios");
const verifyToken = require("../../middlewares/verifyToken");
//const userSchema = require("../../models/user");

const router = Router();

router.get("/all", verifyToken, async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/carts");
    res.status(200).json(response.data);
  } catch (error) {
    error instanceof Error
      ? res.status(401).json({ message: error.message })
      : res.json({ message: error });
  }
});

module.exports = router;
