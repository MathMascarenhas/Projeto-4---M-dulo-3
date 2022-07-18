import Characters from './Characters.model.js';

export const allCharacters = async (offset, limit) => await Characters.find().skip(offset).limit(limit);

export const characterById = async (idParam) => await Characters.findById(idParam);

export const findSearch = async (search) => await Characters.find({
  name: {$regex: `${search || ""}`, $options: "i"}});

export const createNewCharacter = async (character) => await Characters.create(character);

export const characterUpdate = async (idParam, updateBody) => await Characters.findByIdAndUpdate(idParam, updateBody).setOptions({
    returnOriginal: false,
  });

export const removeCharacter = async (idParam) => await Characters.findByIdAndDelete(idParam);
