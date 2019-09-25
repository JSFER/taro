/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

export const getResultData_servers = (postData: Object) => {
    return HTTPREQUEST.post('/api/admin/login', postData)
}