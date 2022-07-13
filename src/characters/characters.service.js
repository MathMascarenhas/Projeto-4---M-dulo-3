import Characters from './Characters.model.js'

export const allCharacters = async () => await Characters.find();

export const characterById = async (idParam) => await Characters.findById(idParam);

export const createNewCharacter = async (character) => Characters.create(character);

export const characterUpdate = async (idParam, updateBody) => {
    return Characters.findByIdAndUpdate(idParam, updateBody).setOptions({
        returnOriginal: false
    });
};
