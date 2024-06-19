"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let moderator = new Schema({
    disciplina: {
        type: String
    },
    takmicar_broj: {
        type: String
    },
    serija: {
        type: Number
    },
    rezultat: {
        type: String
    }
});
exports.default = mongoose_1.default.model("RezultatModel", moderator, "rezultati");
//# sourceMappingURL=rezultat.model.js.map