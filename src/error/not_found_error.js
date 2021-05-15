import HTTP_STATUS from "../utils/http_status";
class NotFoundError extends Error {
    constructor(args){
        super(args);
        this.statuscode = HTTP_STATUS.NOT_FOUND;
    }
}
export default NotFoundError