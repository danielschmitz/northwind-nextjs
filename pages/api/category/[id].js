import db from "../../../db"
import { HTTP_STATUS, METHOD } from "../../../utils"
export default async (req, res) => {

    const {
        query: { id },
        method,
        body
      } = req

    if (method === METHOD.GET) {
        const result = await db('categories').where({id})
        return res.status(HTTP_STATUS.OK).json(result)
    }

    if (method === METHOD.PUT) {
        const { name, description } = body
        const result = await db('categories').where({id}).update({name,description})
        return res.status(HTTP_STATUS.OK).send(result)
    }

    return res.status(HTTP_STATUS.NOT_ALLOWED).send(`${method} Method Not Allowed`)
}   
    