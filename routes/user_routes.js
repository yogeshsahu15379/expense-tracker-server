import express from "express"

import { createUser, deleteUser, getAllUsers, getUser } from "../controllers/user.js";

const UserRouter = express.Router();

UserRouter.get("/",getAllUsers)
UserRouter.get("/:id",getUser)
UserRouter.post("/",createUser)
UserRouter.delete("/:id",deleteUser)

export default UserRouter;