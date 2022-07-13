import Characters from './Characters.model.js'

export const allCharacters = async () => await Characters.find();

export const characterById = async (idParam) => await Characters.findById(idParam);