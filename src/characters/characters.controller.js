import Characters from './Characters.model.js';
import {
  allCharacters,
  characterById,
  findSearch,
  createNewCharacter,
  characterUpdate,
  removeCharacter,
} from './characters.service.js';

export const findAll = async (req, res) => {
  let { limit, offset } = req.query;
  limit = Number(limit);
  offset = Number(offset);
  if (!limit) {
    limit = 8;
  }
  if (!offset) {
    offset = 0;
  }
  const characters = await allCharacters(offset, limit);
  if (characters.length === 0) {
    return res.status(200).send({ message: 'Nenhum personagem cadastrado!' });
  }
  res.send({ characters });
};

export const findById = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await characterById(idParam);
  res.send(chosenCharacter);
};

export const searchCharacter = async (req, res) => {
  const { name } = req.query;
  const results = await findSearch(name);
  if (results.length === 0) {
    return res
      .status(404)
      .send({ message: 'Nenhum personagem encontrado a partir da pesquisa!' });
  }
  res.send(results);
};

export const createCharacter = async (req, res) => {
  const character = req.body;
  const newCharacter = await createNewCharacter(character);
  res.status(201).send(newCharacter);
};

export const updateCharacter = async (req, res) => {
  const idParam = req.params.id;
  const updateBody = req.body;
  const updatedCharacter = await characterUpdate(idParam, updateBody);
  res.send(updatedCharacter);
};

export const deleteCharacter = async (req, res) => {
  const idParam = req.params.id;
  await removeCharacter(idParam);
  res.send({ message: 'Personagem deletado!' });
};
