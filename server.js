import express from 'express';
import cors from 'cors';
import defaultRouter from './api/defaultRouter';
import simpleRouter from './api/simpleRouter';
const logger = require('./logger');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const db = process.env.MONGO_URL;

mongoose.connect(db, { 
    useNewUrlParser: true,
     useCreateIndex: true,
      useUnifiedTopology: true })
    .then(() => {
        logger.info('Connected to the database');
    }).catch((err) => {
        logger.warn(err.message);
    });

app.use('/', defaultRouter);
app.use('/thing', simpleRouter);

var server = app.listen(port, () => {
    logger.info(`Server started on port: ${port}`)
});

module.exports = server;