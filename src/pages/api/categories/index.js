import categoriesService from '../../../services/categories'
import { HTTP_STATUS, METHOD } from "../../../utils"


export default async (req, res) => {

    const { method, body } = req

    if (method === METHOD.POST) {
        const { name, description } = body

        try {
            const result = await categoriesService.create(name, description)
            return res.status(HTTP_STATUS.CREATED).json({...body,id:result[0]})
        } catch (error) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json(error.message)
        }
        
    }

    const result = await categoriesService.getAll()
    return res.status(HTTP_STATUS.OK).json(result)
}   
    