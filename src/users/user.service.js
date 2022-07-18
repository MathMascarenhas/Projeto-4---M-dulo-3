import User from './User.model.js';

export const createNewUser = async (body) => await User.create(body);

export const findUsers = async () => await User.find();

export const findUserById = async (userID) => await User.findById(userID);
