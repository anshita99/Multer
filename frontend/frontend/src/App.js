// import { makeStyles, createStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { Switch, Route } from 'react-router-dom';
// import React, {useState} from 'react';
// import axios from 'axios';
// // import  '.../public/uploads'


// const useStyles = makeStyles(theme => createStyles({
//   root: {
//     padding: '50px 0',
//   },
//   container: {
//     maxWidth: '70%',
//     margin: 'auto',
//   },
//   containerUpload: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',   
//     height: '300px', 
//     backgroundColor: theme.palette.secondary.main,
//     borderRadius: '3px',
//     '& h3': {
//       color: theme.palette.tertiary.main,
//     },
//     '& i': {
//       color: theme.palette.tertiary.main,
//       padding: '10px 0'
//     },
//     '& label': {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.tertiary.main,
//       borderRadius: '5px',
//       padding: '5px 20px'
//     },
//     '& label:hover': {
//       backgroundColor: theme.palette.primary.light,
//       cursor: 'pointer'
//     },
//     '& label:active': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//     '& label input': {
//         overflow: 'hidden',
//         width: '0'
//     }
//   },
//   containerUploadHover: {
//     backgroundColor: theme.palette.secondary.light,
//   },
//   containerGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& img': {
//       width:'200px',
//       height: '150px',
//       margin: '15px 20px 15px 0',
//       borderRadius: '3px'
//     }
//   },
// }));

// function App() {
//   const [multer, setMulter] = useState([]);
//   const [isDragOver, setDragOver] = useState(false);
//   const [display,setDisplay]=useState(false)
//   const[info, setInfo]=useState([])
//   const classes = useStyles();
//   const a=[]

//   const handleSubmit = file => {

//     // const encodeImage = (mimetype, arrayBuffer) => {
//     //     let u8 = new Uint8Array(arrayBuffer)
        
//     //     const b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
//     //     console.log(arrayBuffer)
//     //     return "data:"+mimetype+";base64,"+b64encoded;
//     // }
//  setDisplay(false)
//     const uploadImage = async () => {
//       const data = new FormData();
//       data.append('file', file);
//       data.append('filename', file.originalname);

      
//       const result = await axios.post('http://localhost:3000/upload', data, { 
//                                         headers: { 'Content-Type': 'multipart/form-data'}
//       });
//       // action="http://localhost:3000/upload"
//       // method="post"
//       // encType="multipart/form-data"

//       console.log("ye result hai",result);
//       const dataURL = ( result.data );
//       console.log("this is data url",dataURL)
      
//       // const a = encodeImage(result.data.arrayBuffer)
//       // console.log(result.data.arrayBuffer)
//       // console.log("ye data hai",dataURL);
//       setMulter([...multer, { url:dataURL }]);
      
//     }

//     uploadImage();
//   };

//   const handleDragOver = evt => {
//     evt.stopPropagation();
//     evt.preventDefault();
    
//     setDragOver(true);
//   };

//   const handleDrop = evt => {
//     evt.stopPropagation();
//     evt.preventDefault();

//     setDragOver(false);

//     const file = evt.dataTransfer.files[0];
//     handleSubmit(file);
//   };

//   const onClicking = () =>{
//     axios.delete("http://localhost:3000/delete")
//       .then((res)=>{setMulter([])
//       setDisplay(false)
//       console.log("data deleted")
//       })
//   }

//   const showData= (idx) => {
//       axios.get("http://localhost:3000/get")
//       .then((res)=>{
//         const parent  = info;
//         parent.push(res.data.files[idx].originalname)
//         setInfo(parent)
//         console.log(info);
//         setDisplay(true)
//         console.log("res",res.data.files[idx].originalname)
        
//       })
     
//       window.open`file:///home/anshitagarg/Documents/multer/backend/uploads`
//   }

// //   const showHead= (idx) => {
// //     axios.get("http://localhost:3000/get")
// //     .then((res)=>{
// //       setInfo(res.name.originalname)
// //       setDisplay(true)
// //       console.log("res",res.data.files[idx])
// //     })
    
// // }


//   return (
//     <div>
//     <Container maxWidth="lg" className={classes.root}>
//       <section  id="image-upload" 
//                className={`${classes.container} ${classes.containerUpload} ${isDragOver ? classes.containerUploadHover : ''}`}
//                onDragOver={evt => handleDragOver(evt)}
//                onDrop={handleDrop}>
//             <i className="fas fa-cloud-upload-alt fa-5x"></i>
//             <label>
//                 <input type="file" name="avatar" onChange={e => handleSubmit(e.target.files[0])}/>
//                 Choose file to upload
//             </label>
//             <h3>or drag and drop them here</h3>
//       </section>
      
//       <section id="image-grid" className={`${classes.container}`}>
//           <h3>Uploads</h3>
//           <div className={`${classes.containerGrid}`}>
//           <ul>
          
//           </ul>
//             {multer.map((avatar, idx) => <div onClick={()=>showData(idx)} >  <img key={`${avatar.name}-${idx}`} src={avatar.dataURL,avatar.originalname} /> <p>{a}</p></div>)}
//             <br/>
            
//           </div> 
//           {display && <div>{info.map(res=><div>{res}</div>)} <button onClick={()=>(setDisplay(false))}>Back</button></div>}
//           <br/>
//           <br/>
           
//           <button onClick={onClicking}>Delete all</button>      
//       </section>
//     </Container>
//     <Container>
    
//     </Container>
//     </div>
//   );
// }

// export default App;


import React from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/image-upload.component";

function App() {
  return (
    <div className="container">
      
      <h4> Image Upload with Preview</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;