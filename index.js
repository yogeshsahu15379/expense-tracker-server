import express from "express"

const app = express();

const port = process.env.PORT || 8000;

app.use("/",(req,res)=>{
    res.send("<h1>man gaya</h1>")
})

app.listen(port,()=>{
    console.log("server is listening at 5500");
})