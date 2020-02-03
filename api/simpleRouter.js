const express = require('express');
const logger = require('../logger');
const simpleRouter = express.Router();
const uuid = require('uuid/v4');
const Thing = require('../model/Things');
const { check, validationResult } = require('express-validator/check');
const method = require('../controllers/thingController');

/**
 * @route GET /thing
 * @returns {object} 200 - Simple text
 */
simpleRouter.get('/', async (req, res) => {
    logger.info('Hitting thing page');
    const users = await method.getAll();
    logger.info(users)
    return res.send(users);
});

simpleRouter.post('/', 
 [
    check('name').isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    check('text').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    check('number').isNumeric().withMessage('must be a numeric value'),
    
], async (req, res) => {

    let errors = validationResult(req);

    let isNameExists = await method.find(req.body.name);
    console.log(isNameExists)

    if(isNameExists)
        errors.errors.push({'value': req.body.name, 'msg': 'This name is already exists', 'param': 'name', 'location': 'body'});

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    method.createThing(uuid(), req.body.name, req.body.text, req.body.number).then(thing => res.status(200).json(thing))

})

simpleRouter.delete('/', (req, res) => {
    logger.info('Deleting the whole collection...');
    method.deleteAll();
})

export default simpleRouter;