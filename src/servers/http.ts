import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

class httpRequest {
    baseOptions(params:any, method = "GET") {
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

    get(url:string, data = "") {
        let option = { url, data };
        return this.baseOptions(option);
    }

    post(url:string, data:object, contentType?:string) {
        let params = { url, data, contentType };
        return this.baseOptions(params, "POST");
    }

    put(url:string, data = "") {
        let option = { url, data };
        return this.baseOptions(option, "PUT");
    }

    delete(url:string, data = "") {
        let option = { url, data };
        return this.baseOptions(option, "DELETE");
    }

}

export default new httpRequest()
