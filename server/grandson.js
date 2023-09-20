const express = require("express");
const router = express.Router();

// 127.0.0.1:3000/grandson
router.get("/", (req, res) => {
  console.log("Mensaje a root de nietos.");
  res.send("ok");
});

module.exports = router;
