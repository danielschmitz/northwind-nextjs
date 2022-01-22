import handleErrors from "../../../error/handle_errors"
import employeesService from "../../../services/employees"
import HTTP_METHOD from "../../../utils/http_method"
import HTTP_STATUS from "../../../utils/http_status"

export default handleErrors(async (req, res) => {
  const { method, body } = req

  if (method === HTTP_METHOD.POST) {
    const result = await employeesService.create(body)
    return res.status(HTTP_STATUS.CREATED).json({ ...body, id: result[0] })
  }

  const result = await employeesService.getAll()
  return res.status(HTTP_STATUS.OK).json(result)
})
