import mongoose from "mongoose";


const UserLoginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    loginTime: { type: Date, default: Date.now },
    ipAddress: { type: String } 
})


const UserLogin = mongoose.model('UserLogin', UserLoginSchema);
export default UserLogin;