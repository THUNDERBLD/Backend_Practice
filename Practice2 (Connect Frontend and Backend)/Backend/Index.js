import express, { json } from "express";
import "dotenv/config"
import cors from "cors";

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());

const objData = [
    {"name": "Thunder", "age": 26},
    {"name": "Ayan", "age": 18},
    {"name": "Barry", "age": 20},
    {"name": "Faraz", "age": 17},
    {"name": "Aisha", "age": 23}
]
const roadmaps = [
    {"image": "Thunder", "description": 26},
    {"name": "Ayan", "age": 18},
    {"name": "Barry", "age": 20},
    {"name": "Faraz", "age": 17},
    {"name": "Aisha", "age": 23}
]

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello, World! I am Thunder');
})

app.get("/api/objData", (req,res) => {
    res.send(objData);
} )
app.get("/api/objData/roadmaps", (req,res) => {
    res.send(roadmaps);
} )

app.listen(port, (req, res) =>{
    console.log(`Server is running on port localhost:${port}`);
})