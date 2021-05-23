import handleErrors from "../../../error/handle_errors"
import suppliersService from "../../../services/suppliers"
import HTTP_METHOD from "../../../utils/http_method"
import HTTP_STATUS from "../../../utils/http_status"

export default handleErrors(async (req, res) => {
  const { method, body } = req

  if (method === HTTP_METHOD.POST) {
    const { contactName, contactTitle, companyName } = body
    const result = await suppliersService.create(
      contactName,
      contactTitle,
      companyName
    )
    return res.status(HTTP_STATUS.CREATED).json({ ...body, id: result[0] })
  }

  const result = await suppliersService.getAll()
  return res.status(HTTP_STATUS.OK).json(result)
})
