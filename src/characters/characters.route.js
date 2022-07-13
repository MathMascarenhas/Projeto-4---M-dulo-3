import express from 'express';
const router = express.Router();

router.get('characters/');
router.get('characters/find/:id');
router.post('characters/create');
router.put('characters/update/:id');
router.delete('characters/delete/:id');

export default router;