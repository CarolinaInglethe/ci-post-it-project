import express from 'express';
import cors from 'cors';
import Routes from './routes/lembretes.js';

const app = express();

app.use(express.json());
app.use(cors()); // evitar conflitos para rodar localmente.

app.use('/', Routes);

app.listen(8800);