// import model
const StudentData=require("../models/StudentData");

exports.deleteData=async(req,res)=>{
    try{
      // fetch all todo items from database
      const {id}=req.params;
      await StudentData.findByIdAndDelete(id);
      

      // response
      res .json({
        success:true,
        message:" delete success ",

      })

    } 
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false, 
            error:err.message,
            message:"server error",
        });
       

    }
}