import express from 'express';
const routerCharacters = express.Router();
import {
  findAll,
  findById,
  searchCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from './characters.controller.js';
import { validId, validCreate, validUpdate } from './characters.middleware.js'
import authorize from '../auth/auth.middleware.js'

routerCharacters.get('/characters', authorize, findAll);
routerCharacters.get('/characters/find/:id', authorize, validId, findById);
routerCharacters.get('/characters/search', authorize, searchCharacter);
routerCharacters.post('/characters/create', authorize, validCreate, createCharacter);
routerCharacters.put('/characters/update/:id', authorize, validId, validUpdate, updateCharacter);
routerCharacters.delete('/characters/delete/:id', authorize, validId, deleteCharacter);

export default routerCharacters;
