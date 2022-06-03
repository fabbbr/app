import axios from 'axios'
import { API_URL } from '@constants'

const getCategoriesFull = async () => {
    const response = await axios.get(`${API_URL}categoryf`)
    return response.data
}

const getCategories = async () => {
    const response = await axios.get(`${API_URL}category`)
    return response.data
}

const getCategory = async (id_category) => {
    const response = await axios.get(`${API_URL}category/${id_category}`)
    return response.data
}

const categoryService = {
    getCategories,
    getCategory,
    getCategoriesFull,
}

export default categoryService
