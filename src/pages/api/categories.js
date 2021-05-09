import db from "../../db"
import { HTTP_STATUS } from "../../utils"
export default async (req, res) => res.status(HTTP_STATUS.OK).json(await db('categories').orderBy('id'))
    