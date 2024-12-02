import express from 'express'
import 'dotenv/config'
// import cors from 'cors' // if the whiteListing is required from backend to deliver the data to forntend

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
// app.use(cors()) // if cors is requested for backend to deliver the data

app.get('/', (req, res) => {
    res.send('Hello, World! I am Thunder');
})
app.get('/info', (req, res) => {
    res.send('Hey, There! I am Ayan Haider as Thunder blood');
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port localhost:${port}`);
});