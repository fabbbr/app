const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' }
}
const api_url = 'https://127.0.0.1:8080/api/'

function getOptions(params) {
    return JSON.stringify({
        ...requestOptions,
        ...params
    })
}

export async function get(path, params = {}) {
    const response = await fetch(
        api_url+path,
        getOptions({params})
    )
    return await response.json()
}

export async function post(path, data = {}, params = {}) {
    const response = await fetch(
        api_url+path,
        getOptions({params, data})
    )
    return await response.json()
}