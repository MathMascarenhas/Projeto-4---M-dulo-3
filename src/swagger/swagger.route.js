import swaggerUi from 'swagger-ui-express';
import express from 'express';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger.json');
const swaggetRoute = express.Router();


swaggetRoute.use('/api-docs', swaggerUi.serve);
swaggetRoute.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default swaggetRoute;
