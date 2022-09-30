import express, {Request, Response} from 'express';
import {getHome} from '../controllers/home-controller';
import {fetchUsers, fetchUsersById, createNewUser} from '../controllers/users-controller'

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.send('Hello Dave')
})
router.get('/home', getHome);
router.get('/users', fetchUsers)
router.get('/users/:id', fetchUsersById)
router.post('/users', createNewUser)

export default router;
