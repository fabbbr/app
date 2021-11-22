const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' }
}
const api_url = 'http://20.199.101.242:8000/'

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
    return fetch(api_url+path, getOptions({data, params}))
        // .then(response => response.json())
        .catch(error => {
            alert(error)
        })

    // const response = await fetch(
    //     api_url+path,
    //     getOptions({params, data})
    // )
    // return await response.json()
}