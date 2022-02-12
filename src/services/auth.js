import axios from 'axios'
import { API_URL } from '@constants'
import * as LS from '@utils/LocalStorage'

const register = async (username, email, password, country) => {
    const response = await axios.post(API_URL + 'register', {
        username,
        email,
        password,
        country,
    })

    if (response.data.user) LS.set('user', JSON.stringify(response.data.user))
    return response.data.user
}

const login = async (username, password) => {
    const response = await axios.post(API_URL + 'login', {
        username,
        password,
    })

    if (response.data.user) LS.set('user', JSON.stringify(response.data.user))
    return response.data.user
}

const logout = async () => {
    return await LS.remove('user')
}

const getUser = async () => {
    return await LS.get('user')
}

const authService = {
    register,
    login,
    logout,
    getUser,
}

export default authService
