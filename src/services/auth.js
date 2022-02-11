import axios from 'axios'
import { API_URL } from '@constants'
import * as LS from '@utils/LocalStorage'

const register = async (username, email, password) => {
    const response = await axios.post(API_URL + 'signin', {
        username,
        email,
        password,
    })

    if (response.data.token) LS.set('user', JSON.stringify(response.data))
    return response.data
}

const login = async (username, password) => {
    const response = await axios.post(API_URL + 'login', {
        username,
        password,
    })

    if (response.data.token) LS.set('user', JSON.stringify(response.data))
    return response.data
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
