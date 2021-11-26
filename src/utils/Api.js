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

function errorHandler(code = 400, message = '') {
    if(typeof message == 'object') message = JSON.stringify(message);
    if(message.length) alert(message)
    else alert('Une erreur imprévu est survenu')
}

export async function get(path, params = {}) {
    return fetch(api_url+path, getOptions({}, params))
        .then(response => response.json())
        .then(data => {
            if(data.code) errorHandler(data.code, data.message ? data.message : '')
            else return data
        })
        .catch(error => { errorHandler(400, error) })
}

export async function post(path, data = {}, params = {}) {
    console.log('-----');
    return fetch(api_url+path, getOptions(data, params))
        .then(response => response.json())
        .then(data => {
            console.log('here1', data);
            if(data.code) errorHandler(data.code, data.message ? data.message : '')
            else return data
        })
        .catch(error => { console.log('here2');errorHandler(400, error) })
}