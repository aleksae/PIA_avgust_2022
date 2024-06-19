import mongoose from "mongoose";
let Schema = mongoose.Schema

let moderator = new Schema({
    disciplina:{
        type: String
    },
    takmicar_broj:{
        type: String
    },
    serija:{
        type: Number
    },
    rezultat:{
        type: String
    }
})

export default mongoose.model("RezultatModel", moderator, "rezultati")