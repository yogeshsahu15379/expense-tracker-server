import express from "express"

import { getAllUsers } from "../controllers/user.js";

const UserRouter = express.Router();

UserRouter.get("/",getAllUsers)

export default UserRouter;