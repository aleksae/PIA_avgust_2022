import express from 'express'
import moderatorModel from '../models/moderator.model'

export class ModeratorController {

    login = (req:express.Request, res:express.Response)=>{
        moderatorModel.findOne({'korisnicko_ime':req.body.korisnicko_ime, 'lozinka':req.body.lozinka}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })
    }
    dohvati_za_disciplinu= (req:express.Request, res:express.Response)=>{
        moderatorModel.findOne({'disciplina':req.body.disciplina}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })
    }
}