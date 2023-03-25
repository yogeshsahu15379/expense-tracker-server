import mongoose from "mongoose";

const user = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    expenseId: {
        type: Number,
        required: true,
    }
})

export default mongoose.model("user",user);