import axios from 'axios'
import { API_URL } from '@constants'

const getProduct = (id_product) => {
    return axios.post(API_URL + 'product', { id_product })
        .then((response) => {
            return response.data
        })
}

const productsService = {
    getProduct
}

export default productsService