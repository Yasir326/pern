import express, {Request, Response} from 'express';
import {getHome} from '../controllers/home-controller';
import {getUsers, getUsersById, createNewUser, deleteUser, updateUser} from '../controllers/users-controller'

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.send('Hello Dave')
})
router.get('/home', getHome);
router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', createNewUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

export default router;
