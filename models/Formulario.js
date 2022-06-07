import mongoose from "mongoose";

const candidatoSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        email: {type: String, required: true},
        idade: {type: Number, requiered: true},
        redeTrabalho: {type: String, required: true},
        escola: { type: mongoose.Schema.Types.ObjectId, ref: 'escolas', required: true },        
        segmentoAtuacao: {type: String, required: true},
        cargo: {type: String, required:true}
    },
    {
        versionKey: false
    }
)

candidatoSchema.set('timestamps', true);

const candidatos = mongoose.model("candidatos", candidatoSchema)

export default candidatos;