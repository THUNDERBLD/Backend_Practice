import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPricing: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItem:{
        type:[orderItemSchema]
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address" 
    }
    status:{
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
},{timestamps:true});

export const Order = mongoose.model("Order",orderSchema);