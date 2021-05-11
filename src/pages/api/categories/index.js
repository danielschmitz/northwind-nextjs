import db from "../../../db"
import { HTTP_STATUS, METHOD } from "../../../utils"
export default async (req, res) => {

    const { method, body } = req

    if (method === METHOD.POST) {
        const { name, description } = body

        if (!name) return res.status(HTTP_STATUS.CONFLICT).send("The category name cannot be empty")

        const categories = await db('categories').where({ name })
        if (categories.length > 0) return res.status(HTTP_STATUS.CONFLICT).send("The category name already exists")

        const result = await db('categories').insert({name,description}).returning('id')
        return res.status(HTTP_STATUS.CREATED).json({...body,id:result[0]})
    }

    return res.status(HTTP_STATUS.OK).json(await db('categories').orderBy('id'))
}   
    