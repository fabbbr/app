import axios from 'axios'
import authHeader from '@services/auth-header'
import { API_URL } from '@constants'

const getUserBoard = () => {
    return axios.get(API_URL + 'user', { headers: authHeader() })
}

const userService = {
    getUserBoard
}

export default userService