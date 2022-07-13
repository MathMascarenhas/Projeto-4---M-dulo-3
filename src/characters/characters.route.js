import express from 'express';
const router = express.Router();
import {
  findAll,
  findById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from './characters.controller.js';
import { validId, validCreate } from './characters.middleware.js'

router.get('/characters', findAll);
router.get('/characters/find/:id', validId, findById);
router.post('/characters/create', validCreate, createCharacter);
router.put('/characters/update/:id', validId, updateCharacter);
router.delete('/characters/delete/:id', validId, deleteCharacter);

export default router;
