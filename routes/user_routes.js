import express from "express"

import { createUser, deleteUser, getAllUsers, getUser, userLogin } from "../controllers/user.js";

const UserRouter = express.Router();

UserRouter.get("/",getAllUsers)
UserRouter.get("/:id",getUser)
UserRouter.post("/",createUser)
UserRouter.delete("/:id",deleteUser)
UserRouter.post("/login",userLogin);

export default UserRouter;