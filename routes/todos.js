const express=require("express");
const router =express.Router();
// import controller
const {createData}=require("../controllers/createData");
const {getData, getDataById}=require("../controllers/getData");
const {updateData}=require("../controllers/updateData");
const {deleteData}=require("../controllers/deleteData");


// define API routes
router.post("/createData",createData)
router.get("/getData",getData)
router.get("/getData/:id",getDataById );
router.put("/updateData/:id",updateData)
router.delete ("/deleteData/:id",deleteData);
module.exports= router;