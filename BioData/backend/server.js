const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.get("/",(req,res)=>{
    res.send(
        {
            "name" : "Prasasti",
            "age" : "18"
        }
    )
})

app.post("/",(req,res)=>{
    const data = req.body;
    console.log(data)
    res.send({
        "message" : "Record saved successfully"
    })
})

PORT = 8000;

app.listen(PORT , ()=>{
    console.log(`Server started`)
})