const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/cseb_srk")
.then(()=>{
console.log("mongodb connected successfully")
})
.catch((e)=>{
console.log(`error is ${e}`)
})
const port =1234
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})