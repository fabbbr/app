import * as LS from '@utils/LocalStorage'

export default function authHeader() {
    const user = JSON.parse(LS.get(user))

    if (user && user.accessToken) {
        // For Spring Boot back-end
        // return { Authorization: "Bearer " + user.token }
        // for Node.js Express back-end
        return { "x-access-token": user.token };
    } else {
        return {}
    }
}