import express, {Request, Response} from 'express';
import {getHome} from '../controllers/home-controller';
import {fetchUsers, fetchUsersById, createNewUser, removeUser} from '../controllers/users-controller'

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.send('Hello Dave')
})
router.get('/home', getHome);
router.get('/users', fetchUsers)
router.get('/users/:id', fetchUsersById)
router.post('/users', createNewUser)
router.delete('/users/:id', removeUser)

export default router;
