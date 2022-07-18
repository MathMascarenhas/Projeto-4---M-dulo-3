import Characters from './Characters.model.js';

export const allCharacters = async () => await Characters.find();

export const characterById = async (idParam) => await Characters.findById(idParam);

export const findSearch = async (search) => await Characters.find({
  name: {$regex: `${search || ""}`, $options: "i"}});

export const createNewCharacter = async (character) => await Characters.create(character);

export const characterUpdate = async (idParam, updateBody) => {
  return await Characters.findByIdAndUpdate(idParam, updateBody).setOptions({
    returnOriginal: false,
  });
};

export const removeCharacter = async (idParam) => await Characters.findByIdAndDelete(idParam);
