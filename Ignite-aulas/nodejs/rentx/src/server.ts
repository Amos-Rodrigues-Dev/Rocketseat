import express from 'express';
import swaggerUi from 'swagger-ui-express';

import bodyParser from 'body-parser';
import cors from 'cors';

import { createConnection } from './database/data-source';
import { router } from './routes';

import swaggerFile from './swagger.json';

import './shared/container';

createConnection();

const app = express();
const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log(`Server is running in port ${PORT}`));
