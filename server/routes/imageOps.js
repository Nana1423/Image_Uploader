const express = require('express')
const router = express.Router()
const multer = require("multer")

const upload = multer({ storage: multer.memoryStorage() });
const { handleUpload, handleGetImage, handleGetImages } = require("../controllers/imageFuncs");

router.get("/", (req, res) => {
    res.send("Server running...");
  });

router.post("/upload", upload.single("image"), handleUpload);

router.get("/:id", handleGetImage);

module.exports = router;