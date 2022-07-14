import { createNewUser, findUsers } from './user.service.js';

export const createUser = async (req, res) => {
    const user = await createNewUser(req.body).catch((err) => console.log(err.message));
    if(!user) {
        return res.status(400).send({ message: 'Erro ao criar o usuário!'});
    }
    res.status(201).send(user);
}

export const findAllUsers = async (req, res) => {
    const users = await findUsers();

    if(users.length === 0) {
        return res.status(200).send({ message: "Não existem usuários cadastrados!"});
    }
    
    res.send(users);
}
