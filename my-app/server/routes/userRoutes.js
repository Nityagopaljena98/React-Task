import express from 'express';
import User from '../models/user';

const router = express.Router();

router.get('/me', async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send({ message: "Not authenticated" });
        }

        const user = await User.findById(req.session.userId).select('name');
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: "Error fetching user", error });
    }
});

export default router;
