import * as Tools from '../utils/Tools'

const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' }
}
const api_url = 'http://20.199.101.242:8000/'

function getOptions(data, params) {
    let body
    if(Tools.objSize(params) === 0) body = data
    else body = {...data, params}

    return {
        ...requestOptions,
        body: JSON.stringify(body)
    }
}

export async function get(path, params = {}) {
    const response = await fetch(
        api_url+path,
        getOptions(params)
    )
    return await response.json()
}

export async function post(path, data = {}, params = {}) {
    console.log(api_url+path);
    console.log(getOptions(data, params));
    console.log('-----');
    return fetch(api_url+path, getOptions(data, params))
        .then(response => response.json())
        .catch(error => {
            alert(error)
        })
}