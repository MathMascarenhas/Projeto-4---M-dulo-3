import Characters from './Characters.model.js'
import { allCharacters, characterById } from './characters.service.js'

export const findAll = async (req, res) => {
    const characters = await allCharacters()
    if(characters.length === 0){
        return res.status(200).send({ message: 'Nenhum personagem cadastrado!'})
    }
    res.send(characters)
}

export const findById = async (req, res) => {
    const idParam = req.params.id;
    const chosenCharacter = await characterById(idParam);
    res.send(chosenCharacter);
};
