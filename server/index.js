const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./connection");
const dotenv = require("dotenv");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Loads env variables
dotenv.config();

// Routes
const imageRoutes = require("./routes/imageOps")

// Whitelist API
app.use(cors());

// Routes
app.use("/", imageRoutes);

// Running Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    connectDB(process.env.MONGO_URL)
      .then(() =>
        console.log(`server is running at http://localhost:${port}\nDB connected`)
      )
      .catch((err) => console.error(err));
  });
