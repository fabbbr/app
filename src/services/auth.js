import axios from 'axios'
import { API_URL } from '@constants'
import * as LS from '@utils/LocalStorage'

const register = async (username, email, password, country) => {
    const response = await axios.post(API_URL + 'api/register', {
        username,
        email,
        password,
        country,
        is_store: 1,
    })

    if (response.data.user) LS.set('user', JSON.stringify(response.data.user))
    return response.data.user
}

const login = async (username, password) => {
    const response = await axios.post(API_URL + 'api/login', {
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

const getOrders = async (id) => {
    const response = await axios.get(API_URL + 'user/' + id)
    return response.data.orders
}
const getOrder = async (id) => {
    const response = await axios.get(API_URL + 'pip/orders/' + id + '.json')
    return response.data
}
const getAddresses = async (id) => {
    const response = await axios.get(API_URL + 'user/' + id)
    return response.data.addresses
}
const getAddress = async (id) => {
    const response = await axios.get(API_URL + 'pip/addresses/' + id + '.json')
    return response.data
}

const authService = {
    register,
    login,
    logout,
    getUser,
    getOrders,
    getOrder,
    getAddresses,
    getAddress,
}

export default authService
