import express, { Router } from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import moderatorRouter from './routers/moderator.router';
import rezultatRouter from './routers/rezultat.router';
import takmicarRouter from './routers/takmicar.router';


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/munich2022")
mongoose.connection.once('open', () => {
    console.log("db connection ok")
})
const router = Router()

router.use('/moderator', moderatorRouter)
router.use('/takmicar', takmicarRouter)
router.use('/rezultat', rezultatRouter)
app.use('/', router)

app.listen(4000, () => console.log(`Express server running on port 4000`));