import mongoose from "mongoose";
let Schema = mongoose.Schema

let takmicar = new Schema({
    broj:{
        type: String
    },
    lozinka:{
        type: String
    },
    ime:{
        type: String
    },
    drzava:{
        type: String
    }
})

export default mongoose.model("TakmicarModel", takmicar, "takmicari")