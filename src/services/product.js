import axios from 'axios'
import { API_URL } from '@constants'

const getProduct = async (id_product) => {
    const response = await axios.post(`${API_URL}product/${id_product}`)
    return response.data
}

const getProductsBystore = async (id_store) => {
    const response = await axios.post(`${API_URL}product/store/${id_store}`)
    return response.data
}

const productService = {
    getProduct,
    getProductsBystore,
}

export default productService
