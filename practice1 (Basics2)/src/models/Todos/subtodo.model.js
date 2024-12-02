import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
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
    }
},{timestamps:true})

export const SubTodo = mongoose.model('SubTodo',subTodoSchema);