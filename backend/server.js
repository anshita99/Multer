const mongoose = require('mongoose'),
 express = require('express'),
 cors = require('cors'),


 app = express();


app.use(cors())
app.use(express.json())
   



// const MONGODB_URI ='mongodb+srv://poc:poc@cluster0.o2jmn.mongodb.net/multer?retryWrites=true&w=majority';

mongoose.connect("mongodb+srv://poc:poc@cluster0.o2jmn.mongodb.net/multer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("connected to database "))
.catch((err) => console.log("Error on db connection: " + err.message));

// const resetdb = require('./reset');
// resetdb();


const  MulterRouter = require('./routes/multer');

app.use("/", MulterRouter);



app.listen(3000, () => console.log('Server listening on port 3001!'));