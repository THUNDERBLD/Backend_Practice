import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    isComplete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,   // this is used for taking reference from the other modals
        ref: "User"  // this name must be same as => export const User = mongoose.model("User", user); 
        //     |--------------------------------------------------------------------------|               
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
},{timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)