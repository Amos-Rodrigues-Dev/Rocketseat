import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createCourse } from './routes';

const app = express();
const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.get('/', createCourse);

app.listen(3333, () => console.log(`Rodando na porta ${PORT}`));
