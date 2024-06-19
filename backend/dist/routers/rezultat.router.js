"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rezultat_controller_1 = require("../controllers/rezultat.controller");
const rezultatRouter = express_1.default.Router();
rezultatRouter.route('/dohvati_sve_za_takmicara').post((req, res) => new rezultat_controller_1.RezultatController().dohvati_sve_za_takmicara(req, res));
rezultatRouter.route('/dohvati_sve_za_disciplinu').post((req, res) => new rezultat_controller_1.RezultatController().dohvati_sve_za_discipline(req, res));
rezultatRouter.route('/dodaj').post((req, res) => new rezultat_controller_1.RezultatController().dodaj_rezultat(req, res));
exports.default = rezultatRouter;
//# sourceMappingURL=rezultat.router.js.map