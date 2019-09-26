import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

interface Params {
    url: string,
    data: object,
    contentType?: string
}

class httpRequest {
    baseOptions(params: Params, method:any = "GET") {
        let { url, data } = params;
        const BASE_URL = getBaseUrl(url);
        let contentType = "application/json";
        contentType = params.contentType || contentType;
        const option = {
            url: BASE_URL + url,
            data: data,
            method: method,
            header: {
                'content-type': contentType,
                'Authorization': Taro.getStorageSync('Authorization')
            }
        };
        return Taro.request(option);
    }

    get(url:string, data:object = {}) {
        let option = { url, data };
        return this.baseOptions(option);
    }

    post(url:string, data:object, contentType?:string) {
        let params = { url, data, contentType };
        return this.baseOptions(params, "POST");
    }

    put(url:string, data:object = {}) {
        let option = { url, data };
        return this.baseOptions(option, "PUT");
    }

    delete(url:string, data:object = {}) {
        let option = { url, data };
        return this.baseOptions(option, "DELETE");
    }

}

export default new httpRequest()
