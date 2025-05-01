import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect(`${process.env.MONGODB_URI}/food_delivery`).then(()=>console.log("DB Connected"));
    
}