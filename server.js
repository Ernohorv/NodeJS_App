import express from 'express';
import cors from 'cors';
import defaultRouter from './api/defaultRouter';
import simpleRouter from './api/simpleRouter';
const logger = require('./logger');

require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(cors());

app.use('/', defaultRouter);
app.use('/user', simpleRouter);

var server = app.listen(port, () => {
    logger.info(`Server started on port: ${port}`)
});

module.exports = server;