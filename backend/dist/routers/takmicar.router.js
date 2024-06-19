"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const takmicar_controller_1 = require("../controllers/takmicar.controller");
const takmicarRouter = express_1.default.Router();
takmicarRouter.route('/login').post((req, res) => new takmicar_controller_1.TakmicarController().login(req, res));
exports.default = takmicarRouter;
//# sourceMappingURL=takmicar.router.js.map