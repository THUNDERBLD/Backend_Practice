import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 3,
        maxlength: 255
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default: 0,
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
},{timestamps:true});

export const Products = mongoose.model("Product",productSchema);