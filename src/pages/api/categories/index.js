import handleErrors from '../../../error/handle_errors'
import categoriesService from '../../../services/categories'
import HTTP_METHOD from '../../../utils/http_method'
import HTTP_STATUS from '../../../utils/http_status'


export default handleErrors(
    async (req, res) => {

        const { method, body } = req

        if (method === HTTP_METHOD.POST) {
            const { name, description } = body
            const result = await categoriesService.create(name, description)
            return res.status(HTTP_STATUS.CREATED).json({ ...body, id: result[0] })

        }

        const result = await categoriesService.getAll()
        return res.status(HTTP_STATUS.OK).json(result)
    }
)
