import express from "express";
import routes from './routes';
import { appDataSource } from "./data-source";


appDataSource.initialize().then(() => {
    return console.log("Conectado no banco com sucesso!")
})

const app = express();
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
