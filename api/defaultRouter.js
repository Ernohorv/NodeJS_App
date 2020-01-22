import { Router } from 'express';

const defaultRouter = Router();

defaultRouter.get('/', (req, res) => {
    return res.status('200').json({'message': 'Eeee'});
})

export default defaultRouter;