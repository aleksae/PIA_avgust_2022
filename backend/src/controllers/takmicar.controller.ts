import express from 'express'
import takmicarModel from '../models/takmicar.model'

export class TakmicarController {

    login = (req:express.Request, res:express.Response)=>{
        console.log(req.body.broj)
        console.log(req.body.lozinka)
        takmicarModel.findOne({'broj':req.body.broj, 'lozinka':req.body.lozinka}, (err, resp)=>{
            if(err) console.log(err)
            else {
                console.log(resp)
                res.json(resp)
            }
        })
    }   
}