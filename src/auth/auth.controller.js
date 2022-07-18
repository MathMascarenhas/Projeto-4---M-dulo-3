import { authorizeLogin, generateToken } from './auth.service.js';
import bcrypt from 'bcryptjs';

export const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await authorizeLogin(email);
  if (!user) {
    return res.status(400).send({ message: 'Email inválido!' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Senha inválida!' });
  }
  const token = generateToken(user.id);
  res.send({ token });
};
