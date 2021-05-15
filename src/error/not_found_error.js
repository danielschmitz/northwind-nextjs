class NotFoundError extends Error {
    constructor(args){
        super(args);
        this.statuscode = HTTP_STATUS.NOT_FOUND;
    }
}
export default NotFoundError