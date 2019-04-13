import express from 'express';
import bodyParser from 'body-parser';
import { welcomeMessage } from './welcome-message';
import { router } from './routing/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
// const env = process.env.ENV;

app.use(bodyParser.json());
app.use('/api', router)
app.listen(port, welcomeMessage({ port }));
