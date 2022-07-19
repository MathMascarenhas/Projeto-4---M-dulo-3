import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDatabase from './database/db.js';
import charactersRoute from './characters/characters.route.js';
import userRoute from './users/user.route.js';
import authRoute from './auth/auth.route.js';
import swaggetRoute from './swagger/swagger.route.js';

connectToDatabase();

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/characters', charactersRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/', swaggetRoute);

app.listen(port, () =>
  console.log(`Server running on port: ${port}`),
);
