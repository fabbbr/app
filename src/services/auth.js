import axios from 'axios'
import { API_URL } from '@constants'
import * as LS from '@utils/LocalStorage'

const register = (username, email, password) => {
    return axios.post(API_URL + 'signin', {
        username,
        email,
        password
    })
      .then((response) => {
          if (response.data.token) LS.set('user', JSON.stringify(response.data))
          return response.data
      })
}

const login = (username, password) => {
    return axios
        .post(API_URL + 'login', {
            username,
            password
        })
        .then((response) => {
            if (response.data.token) LS.set('user', JSON.stringify(response.data))
            return response.data
        })
};

const logout = () => {
    LS.remove('user')
}

const getUser = () => {
    LS.get('user')
}

const authService = {
    register,
    login,
    logout,
    getUser
}

export default authService