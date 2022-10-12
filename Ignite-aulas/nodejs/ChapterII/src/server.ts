import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specification.routes';

const app = express();
const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => console.log(`Server is running in port ${PORT}`));
