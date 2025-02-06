import express from 'express'
import cors from 'cors' // cross-origin-resource-shairing

import connectDB from './database/db.js';
import authRoutes from './routes/authRoutes.js'

import { configDotenv } from 'dotenv';
configDotenv()


const app = express()


// Middleware APi 
app.use(cors({ origin: "http://localhost:3000" })) // corss server access
app.use(express.json())



//Routes
app.use('/api/auth', authRoutes);





// Assign PORT and Hostname to the Server 
const PORT = process.env.PORT
const hostname = process.env.HOST_NAME


app.listen(PORT, hostname, (error) => {
    if (!error) {
        console.log(`Server running successfully at ${hostname}:${PORT}`)
        // connect to the mongodb 
        connectDB();
    } else {
        console.log(`Server not connected !`);

    }
})