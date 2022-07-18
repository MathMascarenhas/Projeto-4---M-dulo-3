import jwt from 'jsonwebtoken';
import {findUserById} from '../users/user.service.js'

const authorize = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({ message: "O token não foi informado"});
    }

    const authorization = authHeader.split(" ");
    
    if(authorization.length !== 2){
        return res.status(401).send({message: "Token não é válido!"})
    }

    const [scheme, token] = authorization;

    if(!/^Bearer$/.test(scheme)){
        return res.status(401).send({message: "Token fora dos padrões da API"});
    }
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err) {
            return res.status(401).send({message: "Token inválido!"})
        }
        const user = await findUserById(decoded.id);
        if(!user) {
            return res.status(401).send({message: "Token inválido!"})
        }

        return next();
    })
} 

export default authorize;
