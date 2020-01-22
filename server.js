import express from 'express';
import cors from 'cors';
import defaultRouter from './api/defaultRouter';

require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(cors());

app.use('/', defaultRouter);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

app.get('/', (req, res) => {
    res.status('200').json({'text': "1"});
})