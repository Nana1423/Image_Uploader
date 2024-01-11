const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors')
const multer = require("multer");

// Loads env variables
const dotenv = require("dotenv");
dotenv.config();

const imageRoutes = require("./routes/imageOps")

// Whitelist API
app.use(cors());

// Routes
app.use("/", imageRoutes);

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listen in port http://localhost:${port}`)
  });
