const StudentData=require("../models/StudentData");
exports.getData=async(req,res)=>{
    try{
      // fetch all todo items from database
      const todos=await StudentData.find({}) ;
      // response
      res.status(200)
      .json({
        success:true,
        data:todos,
        message:"entire details of student data is fetched",

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

exports.getDataById=async(req,res)=>{
    try{
      // fetch all todo items from database
      const id=req.params.id;

      const todos=await StudentData.findById({_id:id}) 
      //  data forgiven not found
      if(!StudentData)
      {
        return res.status(404).json({
            success:false,
            message:"no data found with this id"
        })

      }
      // data found
      
      // response
      res.status(200)
      .json({
        success:true,
        data:todos,
        message:"Id  Details data is fetched",

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