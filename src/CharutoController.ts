
import { Request, Response } from "express"
import { CharutoRepository } from "../repositories/CharutoRepository"



export class CharutoController {

    async index(req: Request, res: Response): Promise<Response> {
        const charuto = await CharutoRepository.find()
        return res.json(charuto)
    }


    async indexQuery(req: Request, res: Response) {

        const { id_charuto } = req.params


        try {
            // const charuto = await CharutoRepository.query('select * from charutos where id_charutos = ?', [id_charuto])
            const charuto = await CharutoRepository.findOneBy({
                id_charutos: Number(id_charuto),
            })

            if (!charuto) {
                return res.status(404).json({ message: 'Charuto não encontrado!' })
            }
            return res.json(charuto)
        } catch (error) {
            res.status(500).json({ message: 'Error: ' + error })
        }
    }

    async createCharuto(req: Request, res: Response) {
        const newCharuto = await CharutoRepository.create(req.body)
        await CharutoRepository.save(newCharuto)
        console.log(newCharuto)
    }
}