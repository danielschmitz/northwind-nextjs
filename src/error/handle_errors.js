import HTTP_STATUS from "../utils/http_status";

const handleErrors = handler => {
  return async (req, res) => {
    try {
      return await handler(req, res)
    } catch (error) {
      return res.status(error.statuscode || HTTP_STATUS.BAD_REQUEST).send(error.message)
    }
  };
}
export default handleErrors