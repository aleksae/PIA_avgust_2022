"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let moderator = new Schema({
    korisnicko_ime: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    disciplina: {
        type: String
    },
    takmicari: {
        type: (Array)
    }
});
exports.default = mongoose_1.default.model("ModeratorModel", moderator, "moderatori");
//# sourceMappingURL=moderator.model.js.map