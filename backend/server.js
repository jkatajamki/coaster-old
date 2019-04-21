import express from 'express';
import bodyParser from 'body-parser';
import { welcomeMessage } from './utils/welcome-message';
import { router } from './routing/routes';
import dotenv from 'dotenv';
import { authenticationMiddleware } from './authentication/auth-middleware';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
// const env = process.env.ENV;

app.use(bodyParser.json());
app.use('/api', authenticationMiddleware, router)
app.listen(port, welcomeMessage({ port }));
