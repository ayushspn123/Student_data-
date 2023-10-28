const express=require("express");
const app= express();
//load config from env file
require("dotenv").config();
const PORT =process.env.PORT || 4000;
//middleware to parse json request body
app.use(express.json());
// import routes for Studentdata  api
const  todoRoutes=require("./routes/todos");
const { db } = require("./models/StudentData");
const dbConnect = require("./config/database");
//mount the todo API routes
app.use("/api/v1",todoRoutes);
// start server
app.listen(PORT,()=>{      
    console.log(`server started at ${PORT}`)    
})
//connection db
 const dbconnect=require("./config/database");
 dbconnect();

 // default routs
 app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage </h1>`)
 })

