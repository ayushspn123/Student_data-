// import model
const StudentData=require("../models/StudentData");

exports.updateData=async(req,res)=>{
    try{
      // fetch all  items from database
      const {id}=req.params;
      const {name,section,stream,rollno,class_}=req.body;
      const todos=await StudentData.findByIdAndUpdate({
        _id:id},
        {name,section,stream,rollno,class_,updatedAt:Date.now()},
      ) ;

      // response
      res.status(200)
      .json({
        success:true,
        data:todos,
        message:"Update success ",

      });

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