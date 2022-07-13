import mongoose from "mongoose";
import Characters from "./Characters.model.js";

export const validId = async (req, res, next) => {
    const idParam = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(idParam)){
        return res.status(404).send({message: 'ID inválido'})
    }
    if(await Characters.findById(idParam) === null){
        return res.status(404).send({message: 'ID inválido!'})
    }
    next();
}
