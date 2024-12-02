import express from 'express';
import cors from 'cors' // if the whiteListing is required from backend to deliver the data to forntend

const app = express();

// middlewares
app.use(express.json({limit: "16kb"}));       // accepting this size of amount of json data here
app.use(express.urlencoded({
    extended:true,
    limit: "16kb"
}));
app.use(express.static("public"))
app.use(cors({
    origin: process.env.CORS_ORIGIN
})) // if cors is requested for backend to deliver the data

// routes imports

// routes declaration


export default app;