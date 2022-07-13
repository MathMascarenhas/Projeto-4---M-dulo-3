import express from 'express';
const router = express.Router();
import { findAll, findById, createCharacter, updateCharacter, deleteCharacter } from './characters.controller.js'

router.get('/characters', findAll);
router.get('/characters/find/:id', findById);
router.post('/characters/create', createCharacter);
router.put('/characters/update/:id', updateCharacter);
router.delete('/characters/delete/:id', deleteCharacter);

export default router;
