import express from 'express';
import cors from 'cors';
import { routes } from './routes';

import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`HTTP server running on port ${PORT} !`));
