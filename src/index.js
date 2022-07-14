import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDatabase from './database/db.js';
import router from './characters/characters.route.js'

connectToDatabase();

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`),
);