"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RezultatController = void 0;
const rezultat_model_1 = __importDefault(require("../models/rezultat.model"));
class RezultatController {
    constructor() {
        this.dohvati_sve_za_takmicara = (req, res) => {
            rezultat_model_1.default.find({ 'takmicar_broj': req.body.takmicar_broj }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dohvati_sve_za_discipline = (req, res) => {
            rezultat_model_1.default.find({ 'disciplina': req.body.disciplina }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dodaj_rezultat = (req, res) => {
            const rezultat = new rezultat_model_1.default(req.body);
            rezultat.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "ok" });
            });
        };
    }
}
exports.RezultatController = RezultatController;
//# sourceMappingURL=rezultat.controller.js.map