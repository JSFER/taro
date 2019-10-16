import Taro from "@tarojs/taro"
import getBaseUrl from "./baseUrl"
import interceptors from "./interceptors"

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

interface Params {
    url: string
    data: object
    contentType?: string
}

interface Options {
    url: string
    data: object
    method: any
    header: {
        "content-type": string
        Authorization: any
    }
}

class httpRequest {
    baseOptions(params: Params, method: string) {
        let { url, data } = params
        const BASE_URL = getBaseUrl(url)
        let contentType = "application/json"
        contentType = params.contentType || contentType
        const option: Options = {
            url: BASE_URL + url,
            data,
            method,
            header: {
                "content-type": contentType,
                Authorization: Taro.getStorageSync("Authorization")
            }
        }
        return Taro.request(option)
    }

    get(url: string, data: object = {}) {
        let option: Params = { url, data }
        return this.baseOptions(option, "GET")
    }

    post(url: string, data: object, contentType?: string) {
        let params: Params = { url, data, contentType }
        return this.baseOptions(params, "POST")
    }

    put(url: string, data: object = {}) {
        let option: Params = { url, data }
        return this.baseOptions(option, "PUT")
    }

    delete(url: string, data: object = {}) {
        let option: Params = { url, data }
        return this.baseOptions(option, "DELETE")
    }
}

export default new httpRequest()
