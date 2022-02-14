import * as LS from '@utils/LocalStorage'

const authHeader = async () => {
    const data = await LS.get('user')
    const user = JSON.parse(data)
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token }
    } else {
        return {}
    }
}

export default authHeader
