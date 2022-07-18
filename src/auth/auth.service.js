import User from '../users/User.model.js';
import jwt from 'jsonwebtoken';


export const authorizeLogin = async (email) =>
  await User.findOne({ email: email }).select('+password');

export const generateToken = (userID) => jwt.sign({ id: userID}, process.env.SECRET, { expiresIn: "1d"});
