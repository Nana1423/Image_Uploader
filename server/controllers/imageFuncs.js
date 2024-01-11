const shortid = require("shortid");
const URL = require("../models/url");
const shortId = require("shortid");

// Uploads image to DB
const handleUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    // Create img object
    const shortid = shortId();
    const newImg = await URL.create({
      image: {
        data: req.file.buffer.toString("base64"),
        contentType: req.file.mimetype,
      },
      shortUrl: shortId,
    });

    // Send OK response and confirmation data
    const port = process.env.PORT || 3000;
    const str = `data:${newImg.image.contentType};base64,${newImg.image.data}`;
    const url = process.env.SERVER || `http://localhost:${port}/${newImg._id}`;
    res.status(201).send({ imageData: str, url: url });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Gets the image by providing ID
const handleGetImage = async (req, res) => {
  try {
    // Checks if ID is in DB
    const { id } = req.params;
    if (!req.params) {
      res.status(404).json({ error: "Id has not value" });
    }

    // Request image by ID
    const img = await URL.findOne({ _id: id });

    // Send OK response and confirmation data
    if (!img) {
      res.status(404).send({ error: "Image not found" });
    } else {
      const str = `data:${img.image.contentType};base64,${img.image.data}`;
      res.status(200).send(str);
    }

  } catch (error) {
    res.json({ error: error.message });
  }
};



module.exports = { handleUpload, handleGetImage };
