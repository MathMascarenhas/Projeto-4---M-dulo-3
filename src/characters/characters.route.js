import express from 'express';
const charactersRoute = express.Router();
import {
  findAll,
  findById,
  searchCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from './characters.controller.js';
import { validId, validCreate, validUpdate } from './characters.middleware.js';
import authorize from '../auth/auth.middleware.js';

charactersRoute.get('/', authorize, findAll);
charactersRoute.get('/find/:id', authorize, validId, findById);
charactersRoute.get('/search', authorize, searchCharacter);
charactersRoute.post('/create', authorize, validCreate, createCharacter);
charactersRoute.put('/update/:id', authorize, validId, validUpdate, updateCharacter);
charactersRoute.delete('/delete/:id', authorize, validId, deleteCharacter);

export default charactersRoute;
