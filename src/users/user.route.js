import express from 'express';
const userRoute = express.Router();
import { findAllUsers, createUser } from './user.controller.js';

userRoute.get('/', findAllUsers);
userRoute.post('/', createUser);

export default userRoute;
