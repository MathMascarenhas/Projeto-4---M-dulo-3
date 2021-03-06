import mongoose from 'mongoose';
import Characters from './Characters.model.js';

export const validId = async (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'ID inválido' });
  }
  if ((await Characters.findById(idParam)) === null) {
    return res.status(404).send({ message: 'ID inválido!' });
  }
  next();
};

export const validCreate = async (req, res, next) => {
  const { name, imageUrl } = req.body;
  if (!name || !imageUrl) {
    return res
      .status(400)
      .send({ message: 'Por favor preencha todos os campos!' });
  }
  if (await Characters.exists({ name: name })) {
    return res.status(400).send({ message: 'Personagem já está cadastrado' });
  }
  next();
};

export const validUpdate = async (req, res, next) => {
  const { name, imageUrl } = req.body;
  const idParam = req.params.id;
  if (!name || !imageUrl) {
    return res
      .status(400)
      .send({ message: 'Por favor preencher todos os campos!' });
  }
  const unupdated = await Characters.findById(idParam);
  if (name === unupdated.name && imageUrl === unupdated.imageUrl) {
    return res.status(400).send({ message: 'Por favor altere um dos campos' });
  }
  next();
};
