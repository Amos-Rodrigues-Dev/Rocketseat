import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import bodyParser from 'body-parser';
import cors from 'cors';

import { createConnection } from './database/data-source';
import { router } from './routes';

import swaggerFile from './swagger.json';

import './shared/container';
import { AppError } from './errors/AppError';

createConnection();

const app = express();
const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log(`Server is running in port ${PORT}`));
