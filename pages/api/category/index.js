import db from "../../../db"
import { HTTP_STATUS, METHOD } from "../../../utils"
export default async (req, res) => {

    const { method, body } = req

    if (method === METHOD.POST) {
        const { name, description } = body
        const result = await db('categories').insert({name,description}).returning('id')
        return res.status(HTTP_STATUS.OK).json({...body,id:result[0]})
    }

    return res.status(HTTP_STATUS.NOT_ALLOWED).send(`${method} Method Not Allowed`)
}   
    