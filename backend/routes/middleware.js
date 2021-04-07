const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: './public/uploads/',
//     filename: function(req, file, cb){
//       cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });

//   const upload = multer({
//     storage: storage,
//     limits:{fileSize: 104857600},
//     fileFilter: function(req, file, cb){
//       checkFileType(file, cb);
//     }
//   }).single('myImage');
  
//   function checkFileType(file, cb){
//     const filetypes = /jpeg|jpg|png|gif/;
    
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);
  
//     if(mimetype && extname){
//       return cb(null,true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   }

//   app.post('/upload', (req, res) => {
//     upload(req, res, (err) => {
//       if(err){
//         res.render('multer', {
//           msg: err
//         });
//       } else {
//           console.log(req.file)
//         if(req.file == undefined){
//           res.render('multer', {
//             msg: 'Error: No File Selected!'
//           });
//         } else {
//           res.render('multer', {
//             msg: 'File Uploaded!',
//             file: `uploads/${req.file.filename}`
//           });
//         }
//       }
//     });
//   });

module.exports = multer({}); 