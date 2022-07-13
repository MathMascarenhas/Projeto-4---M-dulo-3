import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDatabase from './src/database/db.js';

connectToDatabase();

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`),
);
