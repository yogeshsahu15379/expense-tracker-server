import express from "express"

const app = express();

const port = process.env.PORT || 8000;

app.use("/",(req,res)=>{
    res.send("<h1>kyu nhi mann rha man ja na bubu</h1>")
})

app.listen(port,()=>{
    console.log("server is listening at "+port);
})