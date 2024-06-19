import express from 'express'
import { TakmicarController } from '../controllers/takmicar.controller'

const takmicarRouter = express.Router()

takmicarRouter.route('/login').post(
    (req, res)=> new TakmicarController().login(req, res)
)

export default takmicarRouter