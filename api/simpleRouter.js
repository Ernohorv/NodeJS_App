const express = require('express');
const logger = require('../logger');
const simpleRouter = express.Router();
const uuid = require('uuid/v4');

simpleRouter.get('/', (req, res) => {
    logger.info('Hitting user page');
    return res.status('200').json({'User': 0});
})

simpleRouter.get('/:id', (req, res) => {
    logger.info('Getting user id');
    return res.status('200').json({'Id': uuid()});
})

export default simpleRouter;