import axios from 'axios'
import authHeader from '@services/auth-header'
import { API_URL } from '@constants'

const getUserBoard = async () => {
    const response = await axios.post(API_URL + 'user', { headers: authHeader() })
    return response.data
}

const userService = {
    getUserBoard
}

export default userService