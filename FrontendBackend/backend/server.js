const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

//dotenv congig
dotenv.config();

//ConnectDB
const connectDB = require("./config/db");
connectDB()

const colors = require("colors");

const morgan = require("morgan");

//Rest object
const app = express();

//Middleware
app.use(express.json())
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173"
}))

//routes
app.use("/api/v1" , require("./routes/testRoute"))
app.use("/api/v1" , require("./routes/userRoute"))

//Port
const PORT = process.env.PORT;

//Listen server
app.listen(PORT , ()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} mode at port ${PORT}`.bgMagenta)
})