"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let takmicar = new Schema({
    broj: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    drzava: {
        type: String
    }
});
exports.default = mongoose_1.default.model("TakmicarModel", takmicar, "takmicari");
//# sourceMappingURL=takmicar.model.js.map