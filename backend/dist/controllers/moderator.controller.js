"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeratorController = void 0;
const moderator_model_1 = __importDefault(require("../models/moderator.model"));
class ModeratorController {
    constructor() {
        this.login = (req, res) => {
            moderator_model_1.default.findOne({ 'korisnicko_ime': req.body.korisnicko_ime, 'lozinka': req.body.lozinka }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dohvati_za_disciplinu = (req, res) => {
            moderator_model_1.default.findOne({ 'disciplina': req.body.disciplina }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
    }
}
exports.ModeratorController = ModeratorController;
//# sourceMappingURL=moderator.controller.js.map