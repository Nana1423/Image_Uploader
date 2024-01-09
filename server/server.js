const express = require('express');
const app = express();
const multer = require("multer");
const path = require("path");
const cors = require('cors')

// Whitelist API
app.use(cors());

// storage engine 

const storage = multer.diskStorage({
    destination: './upload',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
})

app.use('/images', express.static('upload'));
app.post("/upload", upload.single('profile'), (req, res) => {

    res.json({
        success: 1,
        profile_url: `http://localhost:3000/images/${req.file.filename}`
    })
})

function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.status(400).json({
            success: 0,
            message: err.message
        });
    } else if (err instanceof CustomError) {
        res.status(300).json({
            success: 0,
            message: err.message
        });
    } else {
        res.status(500).json({
            success: 0,
            message: 'Error interno del servidor'
        });
    }
}


app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]})
})

app.use(errHandler);
app.listen(3000, () => {
    console.log("API running in port 3000");
})
