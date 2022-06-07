import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminBroMongoose from "admin-bro-mongoose"
import mongoose from 'mongoose'
import escolas from "./models/Escolas.js"
import express from "express"
import candidatos from "./models/Formulario.js"

AdminJS.registerAdapter(AdminBroMongoose)

const app = express();

const run = async () => {
    const mongooseDb = await mongoose.connect("mongodb+srv://casadosaber:C3020asasa@casadosaber.mrfseq3.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


    const contentParent = {
        name: 'Cadastros',
        icon: 'CloudLogging',
    }

    const adminJs = new AdminJS({
        resources: [
            { resource: escolas, options: { parent: contentParent } }, 
            { resource: candidatos, options: { parent: contentParent } },
        ],
        rootPath: '/admin',
        branding: {
            logo: 'https://casadosaber.com.br/wp-content/uploads/2022/06/LogoPreto.png',
            companyName: 'Casa do Saber'
        }
    })
    const router = AdminJSExpress.buildRouter(adminJs)

    app
        .use(adminJs.options.rootPath, router)

    await app.listen(3000, () => console.log("Server Start"));
};

run();