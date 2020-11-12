import db from "../../../db"
export default async (req, res) => {

    const { id } = req.query
    const data = await db('categories').where({id})

    return res.status(200).json(data)
}   
    