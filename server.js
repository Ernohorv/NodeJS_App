import express from 'express';
import cors from 'cors';
import defaultRouter from './api/defaultRouter';
import winston from 'winston';
const logger = require('./logger');

require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(cors());

app.use('/', defaultRouter);

app.listen(port, () => {
    logger.info(`Server started on port: ${port}`)
});