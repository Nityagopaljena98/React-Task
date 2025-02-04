import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()

const url = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('DB Connect Succesfully');
        
    } catch (error) {
        console.log('Mongodb DB connection error:'+ error.message);
        process.exit(1) 
    } 
}

export default connectDB;