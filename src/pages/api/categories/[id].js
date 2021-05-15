import categoriesService from '../../../services/categories'
import { HTTP_STATUS, METHOD, isStringBlank } from "../../../utils"

export default async (req, res) => {

    const {
        query: { id },
        method,
        body
    } = req

    if (method === METHOD.GET) { // GET /api/categories/{id}
        const result = await categoriesService.getById(id)
        return res.status(HTTP_STATUS.OK).json(result)
    }

    if (method === METHOD.DELETE) { // DELETE /api/categories/{id}

        //try {
            const result = await categoriesService.delete(id)
            return res.status(HTTP_STATUS.OK).json(result)
        //} catch (error) {
        //    return res.status(HTTP_STATUS.BAD_REQUEST).json(error.message)
        //}       
        
    }

    if (method === METHOD.PUT) { // PUT /api/categories/{id}
        const { name, description } = body

        const category = await db('categories').where({ id })
        if (category.length === 0) {
            return res.status(HTTP_STATUS.NOT_FOUND).send("Category not found")
        }

        if (isStringBlank(name)) {
            return res.status(HTTP_STATUS.BAD_REQUEST).send("Name can't be empty")
        }

        const categories = await db('categories').where({ name }).whereNot({ id })
        if (categories.length > 0) return res.status(HTTP_STATUS.CONFLICT).send("The category name already exists")

        const result = await db('categories').where({ id }).update({ name, description })
        return res.status(HTTP_STATUS.OK).send(result)
    }

    // ANOTHERS METHODS... PATH FOR EXAMPLE....
    return res.status(HTTP_STATUS.NOT_ALLOWED).send('Method Not Allowed')

}