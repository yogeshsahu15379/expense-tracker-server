import express from "express"

const app = express();

app.use("/",(req,res)=>{
    res.send("<h1>man gaya</h1>")
})

app.listen(5500,()=>{
    console.log("server is listening at 5500");
})