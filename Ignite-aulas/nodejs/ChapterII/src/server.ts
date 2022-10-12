import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from './routes';

const app = express();
const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(3333, () => console.log(`Server is running in port ${PORT}`));
