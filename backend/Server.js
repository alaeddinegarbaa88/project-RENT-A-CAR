const express = require ('express');
const conndb = require('./config/conn');
const CarsRouter = require('./routes/Cars');
const userRouter = require('./routes/user');
const app = express();
const port = 5000;

//using json forma in the req and res
app.use(express.json());
app.use("/cars", CarsRouter);
app.use("/users",userRouter)


//call connection to db
conndb();


//listen server
app.listen(port,(err)=>{
    err?console.log(err):console.log(`The server is running on . http://localhost:${port}`);
})