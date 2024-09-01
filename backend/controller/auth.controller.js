import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utill/Error.js";

export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created succesfully");
  } catch (error) {
    next(errorHandler(550,"This is my created Error"));
  }
};
