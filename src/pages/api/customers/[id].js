import handleErrors from "../../../error/handle_errors"
import customersService from "../../../services/customers"
import HTTP_METHOD from "../../../utils/http_method"
import HTTP_STATUS from "../../../utils/http_status"

export default handleErrors(async (req, res) => {
  const {
    query: { id },
    method,
    body,
  } = req

  if (method === HTTP_METHOD.GET) {
    // GET /api/customers/{id}
    const result = await customersService.getById(id)
    return res.status(HTTP_STATUS.OK).json(result)
  }

  if (method === HTTP_METHOD.DELETE) {
    // DELETE /api/customers/{id}
    const result = await customersService.delete(id)
    return res.status(HTTP_STATUS.OK).json(result)
  }

  if (method === HTTP_METHOD.PUT) {
    // PUT /api/customers/{id}
    const { contactName, contactTitle, companyName } = body
    const result = await customersService.update(
      id,
      contactName,
      companyName,
      contactTitle
    )
    return res.status(HTTP_STATUS.OK).send(result)
  }

  // ANOTHERS METHODS... PATH FOR EXAMPLE....
  return res.status(HTTP_STATUS.NOT_ALLOWED).send("Method Not Allowed")
})
