import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://biancagonzalez2244:BiancaG2244@cluster0.qxv6a.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
