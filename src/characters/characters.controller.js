import { findAllCharacters } from './characters.service.js'

export const findAll = async (req, res) => {
    const allCharacters = await findAllCharacters()
    if(allCharacters.length === 0){
        return res.status(200).send({ message: 'Nenhum personagem cadastrado!'})
    }
    res.status(200).send(allCharacters)
}