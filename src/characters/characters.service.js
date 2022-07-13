import Characters from './Characters.model.js'

export const findAllCharacters = async () => await Characters.find();