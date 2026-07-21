const mongoose = require("mongoose");
const colors = require("colors")

const connectDB = async() =>{
    try {
        const connection =  await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connected successfully ${mongoose.connection.host}`.bgGreen);
    } catch (error) {
        console.log(`Database error ${error}`);
    }
}
module.exports = connectDB;