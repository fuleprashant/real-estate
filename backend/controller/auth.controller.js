import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const SignUp = async (req, res ) => {
   const { username, email, password } = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10)
   const newUser = new User({ username, email, password: hashedPassword });
try {
   await newUser.save(); 
   res.status(201).json("User created succesfully");
   
} catch (error) {
   res.status(500).json(error.message)

}
};

// this is the initial level of the base strath