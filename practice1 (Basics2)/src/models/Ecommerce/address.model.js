import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address:{
        type: String,
        required: true,
    },
    City:{
        type: String,
        required: true,
    },
    State:{
        type: String,
        required: true,
    },
    ZipCode:{
        type: String,
        required: true,
    },
    Country:{
        type: String,
        required: true,
    }
},{timestamps:true});

export const Address = mongoose.model('Address',addressSchema);