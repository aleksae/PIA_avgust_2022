"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakmicarController = void 0;
const takmicar_model_1 = __importDefault(require("../models/takmicar.model"));
class TakmicarController {
    constructor() {
        this.login = (req, res) => {
            console.log(req.body.broj);
            console.log(req.body.lozinka);
            takmicar_model_1.default.findOne({ 'broj': req.body.broj, 'lozinka': req.body.lozinka }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    console.log(resp);
                    res.json(resp);
                }
            });
        };
    }
}
exports.TakmicarController = TakmicarController;
//# sourceMappingURL=takmicar.controller.js.map