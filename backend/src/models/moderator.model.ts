import mongoose from "mongoose";
let Schema = mongoose.Schema

let moderator = new Schema({
    korisnicko_ime:{
        type: String
    },
    lozinka:{
        type: String
    },
    ime:{
        type: String
    },
    prezime:{
        type: String
    },
    disciplina:{
        type: String
    },
    takmicari:{
        type: Array<String>
    }
})

export default mongoose.model("ModeratorModel", moderator, "moderatori")