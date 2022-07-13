import express from 'express';
const router = express.Router();
import { findAll, findById } from './characters.controller.js'

router.get('/characters', findAll);
router.get('/characters/find/:id', findById);
router.post('characters/create');
router.put('characters/update/:id');
router.delete('characters/delete/:id');

export default router;
