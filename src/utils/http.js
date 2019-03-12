const baseUrl = 'http://localhost:3001'
const headers = {
    'Content-Type': 'application/json'
}
export default {
    /**
     * http get 请求
     * @param url 请求地址
     * @returns {Promise<any | never>}
     */
    get(url) {
        return fetch(baseUrl + url, {
            headers
        }).then(res => res.json())
    },
    /**
     * http patch 请求
     * @param url 请求地址
     * @param body request body
     * @returns {Promise<any | never>}
     */
    patch(url, body) {
        return fetch(baseUrl + url, {
            body: JSON.stringify(body),
            headers,
            method: 'PATCH'
        }).then(res => res.json())
    }
}