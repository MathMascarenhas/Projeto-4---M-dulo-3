import express from 'express';
const routerCharacters = express.Router();
import {
  findAll,
  findById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from './characters.controller.js';
import { validId, validCreate } from './characters.middleware.js'

routerCharacters.get('/characters', findAll);
routerCharacters.get('/characters/find/:id', validId, findById);
routerCharacters.post('/characters/create', validCreate, createCharacter);
routerCharacters.put('/characters/update/:id', validId, updateCharacter);
routerCharacters.delete('/characters/delete/:id', validId, deleteCharacter);

export default routerCharacters;
