import express from 'express'
import rezultatModel from '../models/rezultat.model'

export class RezultatController {

    dohvati_sve_za_takmicara = (req:express.Request, res:express.Response)=>{
        rezultatModel.find({'takmicar_broj':req.body.takmicar_broj}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })
    }   
    dohvati_sve_za_discipline = (req:express.Request, res:express.Response)=>{
        rezultatModel.find({'disciplina':req.body.disciplina}, (err, resp)=>{
            if(err) console.log(err)
            else res.json(resp)
        })
    }
    dodaj_rezultat = (req:express.Request, res:express.Response)=>{
        const rezultat = new rezultatModel(req.body)
        rezultat.save((err, resp)=>{
            if(err) console.log(err)
            else res.json({"message":"ok"})
        })
    }
}