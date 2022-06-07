import mongoose from "mongoose"

mongoose.connect("mongodb+srv://casadosaber:C3020asasa@casadosaber.mrfseq3.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;