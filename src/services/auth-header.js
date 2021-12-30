import * as LS from '@utils/LocalStorage'

export default function authHeader() {
    return LS.get('user')
        .then(data => {
            const user = JSON.parse(data)
            if(user && user.token) {
                return { Authorization: "Bearer " + user.token }
            } else {
                return {}
            }
        })
}