import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'
import UserLogin from '../models/UserLogin.js';

const router = express.Router()


// Create a Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { name, username, password } = req.body;

        // Check If user already exist or not 
        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).send({ message: 'User already exist !' })
        }

        // Hash Password 
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create a new User 
        const newUser = new User({ name, username, password: hashedPassword })
        await newUser.save()

        res.status(201).send({ message: 'Signup Successful !' })

    } catch (error) {
        res.status(500).send({ message: 'Error while signup', error })
    }
})

// Create a Login Route
router.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exist in database 
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).send({message:'User not found !'})
        }
        
        // Compare the password 
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).send({message:'Invalid Credential !'})
        }


        await UserLogin.create({ 
            username: user.username, 
            loginTime: new Date(), 
            ipAddress: req.ip 
        });

        req.session.userId = user._id;
        req.session.username = user.username; 

        res.status(200).send({ message: "Login successful!"});


    } catch (error) {
        res.status(500).send({message:'Something wrong while login !', error})     
    }
})



export default router;