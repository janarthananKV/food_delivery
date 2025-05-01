import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://Janarthanan:Krishna123@cluster0.9oeas.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
    
}