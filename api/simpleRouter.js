const express = require('express');
const logger = require('../logger');
const simpleRouter = express.Router();
const uuid = require('uuid/v4');
const Thing = require('../model/Things');

simpleRouter.get('/', (req, res) => {
    logger.info('Hitting thing page');
    return res.status('200').json({'Thing': 0});
})

simpleRouter.get('/:id', (req, res) => {
    logger.info('Getting thing id');
    return res.status('200').json({'thing': uuid()});
})

simpleRouter.post('/addThing', (req, res) => {
   const newThing = new Thing({
       id: uuid(),
       name: req.body.name,
       text: req.body.text,
       number: req.body.number
   });

   newThing.save().then(thing => res.status(200).json(thing));
})

simpleRouter.delete('/', (req, res) => {
    logger.info('Deleting the whole collection...');
    Thing.collection.deleteMany({});
})

export default simpleRouter;