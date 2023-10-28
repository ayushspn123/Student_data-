  const mongoose =require("mongoose");
  const todoSchema= new mongoose.Schema(
    {
         name:{
            type:String,
            required:true,
            maxLength:50,
         },
           section:{
            type:String,
            required:false,
            maxLength:50,
         },
         stream:{
            type:String,
            required:true,
            maxLength:50,
         },
         rollno:{
            type:Number,
            required:true,
         },
         class_:{
            type:Number,
            required:true,
         },
         createdAt:{
            type:Date,
            required:true,
            default:Date.now(),

         }, 
         updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
         }
         
    }
  );
  module.exports=mongoose.model("StudentData",todoSchema);