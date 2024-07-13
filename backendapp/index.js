// importing express
var express = require("express")
var cors=require("cors")
require("./connection")
var Employeemodel=require("./model/employee")

// initialize
var app=express()
//mid
app.use(express.json());
app.use(cors())


//api
//add employee
app.post("/add",async(req,res)=>{
    try {
        await Employeemodel(req.body).save();
        res.send({message:"data added!!"});
    } catch (error) {
        console.log(error)
    }
       
    
})
// api view
app.get("/view",async(req,res)=>{
    try {
        var data =await Employeemodel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
        
    }
})
//api delete
app.delete("/remove/:a",async(req,res)=>{
    try {
        var id=req.params.a
        await Employeemodel.findByIdAndDelete(id)
        res.send({message:"Deleted sucessfully!!!"})
    } catch (error) {
        console.log(error)
        
    }
})
// api update
app.put("/edit/:a",async(req,res)=>{
    try {
        var id=req.params.a
        await Employeemodel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated sucessfully!!"})
    }
     catch (error) {
        console.log(error)
    }
    
})
//port
app.listen(3005,()=>{
     console.log("port is up")
})
