import express from "express"
import { test } from "../controller/user.controller.js";

const userRoutes = express.Router();
userRoutes.get("/test",test)

export default userRoutes;