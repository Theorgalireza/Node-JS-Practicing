const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.json({ success: true, msg: `Hi Welcome ${name}` });
  }
  res.json({ success: false, msg: `Name Is Not Vlid!` });
});

module.exports = router