import express from 'express'
import { ModeratorController } from '../controllers/moderator.controller'

const moderatorRouter = express.Router()

moderatorRouter.route('/login').post(
    (req, res)=> new ModeratorController().login(req, res)
)
moderatorRouter.route('/dohvati_za_disciplinu').post(
    (req, res)=> new ModeratorController().dohvati_za_disciplinu(req, res)
)


export default moderatorRouter