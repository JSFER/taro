/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

/**
 * 登入接口 -- 测试
 * @param postData 用户名和密码
 */
export const getResultData_servers = (postData: { email: string, password: string }) => {
    return HTTPREQUEST.post('/api/admin/login', postData)
}