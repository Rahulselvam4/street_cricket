import mongoose from "mongoose";

 const connectDb = async () =>  {
    try {
        await mongoose.connect('mongodb+srv://babyrahul47:tnu5bQ7spu6Q2La3@cluster0.nd7h1.mongodb.net/Street_Cricket?retryWrites=true&w=majority&appName=Cluster0');
        console.log("monglodb connected");
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
export default connectDb;
