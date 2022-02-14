import axios from 'axios'
import { API_URL } from '@constants'

const getProduct = async (id_product) => {
    const response = await axios.post(API_URL + 'product', { id_product })
    return response.data
}

const productsService = {
    getProduct,
}

export default productsService
