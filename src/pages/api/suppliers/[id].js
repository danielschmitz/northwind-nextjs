import handleErrors from "../../../error/handle_errors"
import suppliersService from "../../../services/suppliers"
import HTTP_METHOD from "../../../utils/http_method"
import HTTP_STATUS from "../../../utils/http_status"

export default handleErrors(async (req, res) => {
  const {
    query: { id },
    method,
    body,
  } = req

  if (method === HTTP_METHOD.GET) {
    // GET /api/supliers/{id}
    const result = await suppliersService.getById(id)
    return res.status(HTTP_STATUS.OK).json(result)
  }

  if (method === HTTP_METHOD.DELETE) {
    // DELETE /api/supliers/{id}
    const result = await suppliersService.delete(id)
    return res.status(HTTP_STATUS.OK).json(result)
  }

  if (method === HTTP_METHOD.PUT) {
    // PUT /api/supliers/{id}
    const { contactName, contactTitle, companyName } = body
    const result = await suppliersService.update(
      id,
      contactName,
      contactTitle,
      companyName
    )
    return res.status(HTTP_STATUS.OK).send(result)
  }

  // ANOTHERS METHODS... PATH FOR EXAMPLE....
  return res.status(HTTP_STATUS.NOT_ALLOWED).send("Method Not Allowed")
})
