import express from "express";
import "dotenv/config";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Hello World, The thunder is here!");
})

app.listen(port, (req, res)=>{
    console.log(`Listening on port: ${port}`);
    
})