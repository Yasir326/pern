import express from 'express';
import { registerUser, getUsers } from '../controllers/register-controller';

const router = express.Router();

router.post('/register', registerUser);
router.get('/register', getUsers)

export default router;