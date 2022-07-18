import { createNewUser, findUsers } from './user.service.js';
import User from './User.model.js';

export const createUser = async (req, res) => {
  const { name, username, email, password, photo } = req.body;
  if (!name || !username || !email || !password || !photo) {
    return res.status(400).send({
      message: 'Alguns campos estão faltando!',
    });
  }
  if (await User.exists({ username: username })) {
    return res.status(400).send({ message: 'Este username já existe!' });
  }
  if (await User.exists({ email: email })) {
    return res.status(400).send({ message: 'Este email já está cadastrado!' });
  }
  const user = await createNewUser(req.body).catch((err) =>
    console.log(err.message),
  );
  if (!user) {
    return res.status(500).send({ message: 'Erro ao criar o usuário!' });
  }
  res.status(201).send({ user });
};

export const findAllUsers = async (req, res) => {
  const users = await findUsers();
  if (users.length === 0) {
    return res
      .status(200)
      .send({ message: 'Não existem usuários cadastrados!' });
  }
  res.send(users);
};
