import mongoose from "mongoose";

const escolaSchema = new mongoose.Schema(
    {
        
        nomeEscola: {type: String, required: true},
        diretor: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const escolas = mongoose.model("escolas", escolaSchema)

export default escolas;