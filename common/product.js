const express = require("express");
const router = express.Router();

router.get("/details", (req, res) => {
	return res.status(200).json({ message: "User Get method fired" });
});

module.exports = router;
