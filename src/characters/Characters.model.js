import mongoose from 'mongoose';

const CharactersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const Characters = mongoose.model('Characters', CharactersSchema);
export default Characters;
