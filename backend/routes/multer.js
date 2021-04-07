//  upload = require('./middleware'),
      multer = require("multer");
 express = require('express'),
 router = express.Router();

const Multer = require('../models/multer');




  upload=multer({
    dest:"images",
    limits:{
        fileSize:104857600
    }
})

router.post('/upload', upload.single('file'), async (req, res) => {
    console.log(`POST request upload multer ${req.file.originalname}`);
    console.log(req.file)
       
    const newMulter = req.file;
    

    await Multer.create(newMulter)
        .then((resolve) => {
            console.log(`STATUS :: Success`);
            res.status(201).send({name: newMulter.originalname,
                                mimetype: newMulter.mimetype,
                                buffer: newMulter.buffer
                                
            });
            // res.status(201).send("hello")
        })
        .catch((e) => {
        console.error(`STATUS :: Ops.Something went wrong.`);
            res.status(500).json({
                error: true,
                message: e.toString()
            });
    });
});

module.exports = router;