import express from 'express'
import { RezultatController } from '../controllers/rezultat.controller'

const rezultatRouter = express.Router()

rezultatRouter.route('/dohvati_sve_za_takmicara').post(
    (req, res)=> new RezultatController().dohvati_sve_za_takmicara(req, res)
)
rezultatRouter.route('/dohvati_sve_za_disciplinu').post(
    (req, res)=> new RezultatController().dohvati_sve_za_discipline(req, res)
)
rezultatRouter.route('/dodaj').post(
    (req, res)=> new RezultatController().dodaj_rezultat(req, res)
)

export default rezultatRouter