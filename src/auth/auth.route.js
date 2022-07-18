import express from 'express';
const authRoute = express.Router();
import { authLogin } from './auth.controller.js'

authRoute.post('/login', authLogin);

export default authRoute;
