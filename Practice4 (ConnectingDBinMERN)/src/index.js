import app from './app.js';
import 'dotenv/config'
import connectDB from './db/index.js';

// the below imports are important for the iffe code not for current database connection method (method 2)
// import mongoose from'mongoose'
// import { DB_Name } from './constants';

const port = process.env.PORT || 3000

connectDB().then((e)=>{
   app.listen(port, (req, res) => {
      console.log(`Server running on port localhost:${port}`)
   })
}).catch((err) =>{
    console.log("MongoDB connection failed: " + err)
})







// the below code is wrong please try another approach but u can read the below Comments
// ;(async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("error",(err) => {
//             console.error("Error : ",err)
//         })
//         app.listen(port, (req, res) =>{
//             console.log(`Server is running on port localhost:${port}`);
//         })
//     } catch(error){
//         console.log("Error: ", error)
//     }
// })()  // this is iffe basically a function without name that is executing itself