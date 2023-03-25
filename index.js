import express from "express"

import mongoServer from "./db.js";

import UserRouter from "./routes/user_routes.js";

mongoServer();

const app = express();

const port = process.env.PORT || 8000;

app.use("/",UserRouter)

app.listen(port,()=>{
    console.log("server is listening at "+port);
})