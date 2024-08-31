import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js";
import signUpRouter from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database is connected") 
}).catch((err) => {
  console.log(err)
})  


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("the server is run on the port 3000")
})

// app.use("/api/user", userRoutes)

app.get("/", (req, res) => {
  res.send("the data is gone")
})

app.use("/api/auth",signUpRouter)


