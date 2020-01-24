import { Router } from 'express';
const logger = require('../logger');
const defaultRouter = Router();

defaultRouter.get('/', (req, res) => {
    logger.info('Default route');
    return res.status('200').json({'message': 'Eeee'});
})

export default defaultRouter;