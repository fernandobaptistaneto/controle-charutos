import { Router } from "express"
import { CharutoController } from "./controllers/CharutoController"


const routes = Router()

export default routes

routes.get('/consultar-charutos', new CharutoController().index)

routes.post('/cadastrar-charutos', new CharutoController().createCharuto)

routes.get('/pesquisar/:id_charuto', new CharutoController().indexQuery)