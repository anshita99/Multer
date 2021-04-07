const upload = require('./middleware'),
 express = require('express'),
 router = express.Router();

const Multer = require('../models/multer');

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