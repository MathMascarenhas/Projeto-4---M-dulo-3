import express from 'express';
const routerUser = express.Router();
import { findAllUsers, createUser } from './user.controller.js';

routerUser.get('/users/', findAllUsers);
routerUser.post('/users/create', createUser);

export default routerUser;
