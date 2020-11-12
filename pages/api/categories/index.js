import db from "../../../db"
export default async (req, res) => res.status(200).json(await db('categories'))
    