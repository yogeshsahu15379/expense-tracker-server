import express from "express"

import mongoServer from "./db.js";

import UserRouter from "./routes/user_routes.js";

mongoServer();

const app = express();

app.use(express.json())

const port = process.env.PORT || 8000;

app.use("/user",UserRouter)

app.listen(port,()=>{
    console.log("server is listening at "+port);
})