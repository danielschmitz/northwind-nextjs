import handleErrors from '../../../error/handle_errors'
import categoriesService from '../../../services/categories'
import HTTP_METHOD from '../../../utils/http_method'
import HTTP_STATUS from '../../../utils/http_status'


const api = async (req, res) => {

    const {
        query: { id },
        method,
        body
    } = req

    if (method === HTTP_METHOD.GET) { // GET /api/categories/{id}
        const result = await categoriesService.getById(id)
        return res.status(HTTP_STATUS.OK).json(result)
    }

    if (method === HTTP_METHOD.DELETE) { // DELETE /api/categories/{id}
        const result = await categoriesService.delete(id)
        return res.status(HTTP_STATUS.OK).json(result)
    }

    if (method === HTTP_METHOD.PUT) { // PUT /api/categories/{id}
        const { name, description } = body
        const result = categoriesService.update(id, name, description)
        return res.status(HTTP_STATUS.OK).send(result)
    }

    // ANOTHERS METHODS... PATH FOR EXAMPLE....
    return res.status(HTTP_STATUS.NOT_ALLOWED).send('Method Not Allowed')

}

export default handleErrors(api)
