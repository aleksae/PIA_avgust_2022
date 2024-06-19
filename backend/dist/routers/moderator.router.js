"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moderator_controller_1 = require("../controllers/moderator.controller");
const moderatorRouter = express_1.default.Router();
moderatorRouter.route('/login').post((req, res) => new moderator_controller_1.ModeratorController().login(req, res));
moderatorRouter.route('/dohvati_za_disciplinu').post((req, res) => new moderator_controller_1.ModeratorController().dohvati_za_disciplinu(req, res));
exports.default = moderatorRouter;
//# sourceMappingURL=moderator.router.js.map