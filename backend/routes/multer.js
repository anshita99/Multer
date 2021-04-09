//  upload = require('./middleware'),
 const multer = require("multer");
 express = require('express'),
 router = express.Router();
 const path = require('path');


const Multer = require('../models/multer');


const storage = multer.diskStorage({
    destination: "uploads",
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });




 const upload=multer({
    storage: storage,
    
    limits:{
        fileSize:104857600
    }
})



router.post('/upload', upload.single('file'), async (req, res) => {
    console.log(`POST request upload multer ${req.file.originalname}`);
    console.log(req.file)
    //    var buf = Buffer.from(req.file)
    //    console.log(buf)
    const newMulter = req.file;
    

    await Multer.create(newMulter)
        .then((resolve) => {
            console.log(`STATUS :: Success`);
            res.status(201).send({name:newMulter
                // name: newMulter.originalname,
                //                 mimetype: newMulter.mimetype,
                //                 path:newMulter.path
                                // buffer: newMulter.buffer
                               
                                
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


router.get('/get',(req,res)=>{
    // console.log(`Get request upload multer ${req.file.originalname}`)
    // const id = req.params.id;
    var mysort = { orginalname: 1 };
     Multer.find()
     .sort(mysort)
    .then((result)=>{
        console.log("Getting",result)
        res.status(200).send({files:result})
    })
    .catch((err)=>{
        res.status(500).json({
            error: true,
            message: err.toString()
    })
        
})
})

router.get('/uploads',(req,res)=>{
    // console.log(`Get request upload multer ${req.file.originalname}`)
    // const id = req.params.id;
    var mysort = { orginalname: 1 };

     Multer.find()
     .sort(mysort)

    .then((result)=>{
        console.log("Getting",result)
        res.status(200).send({files:result})
    })
    .catch((err)=>{
        res.status(500).json({
            error: true,
            message: err.toString()
    })
        
})
});

// router.get('/files/:filename',(req,res)=>{
//     console.log(req.params.filename);
//     const value=__dirname+"/../"
//     console.log(value);
//     Multer.findOne({filename:req.params.filename})
//     .then((result)=>{
//         console.log(result);
//         // console.log(value+result.path);
//         // console.log("Getting",result)
//         res.status(200).send({files:result})
//     })
//     .catch((err)=>{
//         res.status(500).json({
//             error: true,
//             message: err.toString()
//     })
        
// })
// })

router.delete('/delete',(req,res)=>{
    Multer.deleteMany()
    .then((result)=>{
        console.log("Getting",result)
        res.status(200).send("deleted")
    })
    .catch((err)=>{
        res.status(500).json({
            error: true,
            message: err.toString()
    })
})
});


module.exports = router;