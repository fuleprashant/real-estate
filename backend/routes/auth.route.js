import express from "express";
import { SignUp } from "../controller/auth.controller.js";

const signUpRouter = express.Router();

signUpRouter.post("/sign-up", SignUp);

export default signUpRouter;
