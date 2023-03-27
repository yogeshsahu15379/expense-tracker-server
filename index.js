import express from "express"

import mongoServer from "./db.js";

import UserRouter from "./routes/user_routes.js";

import cors from "cors"

mongoServer();

const app = express();

app.use(express.json())

app.use(cors());

const port = process.env.PORT || 8000;

app.use("/user",UserRouter)

app.listen(port,()=>{
    console.log("server is listening at "+port);
})