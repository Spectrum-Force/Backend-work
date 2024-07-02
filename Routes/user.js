import {Router} from 'express';
import { createUser, getUser, getUsers, updateUser, deleteUser } from '../Controllers/user.js';

const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users/:id', getUser);
userRouter.get('/users', getUsers);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

export default userRouter;