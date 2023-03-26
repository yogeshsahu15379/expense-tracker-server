import express from "express"

import { createUser, getAllUsers, getUser } from "../controllers/user.js";

const UserRouter = express.Router();

UserRouter.get("/",getAllUsers)
UserRouter.get("/:id",getUser)
UserRouter.post("/",createUser)

export default UserRouter;