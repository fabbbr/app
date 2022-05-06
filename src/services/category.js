import axios from 'axios'
import { API_URL } from '@constants'

const getCategories = async () => {
    const response = await axios.get(`${API_URL}pip/categories.json`)
    return response.data
}

const getChildCategories = async (id_category) => {
    const response = await axios.post(API_URL + 'category/childs', {
        id_category,
    })
    return response.data
}

const getCategoryProducts = async (id_category) => {
    const response = await axios.post(API_URL + 'category/products', {
        id_category,
    })
    return response.data
}

const getTrendProducts = async () => {
    const response = await axios.post(API_URL + 'category/trend-products')
    return response.data
}

const getCommunityCategories = async () => {
    const response = await axios.post(API_URL + 'category/community')
    return response.data
}

const categoryService = {
    getCategories,
    getChildCategories,
    getCategoryProducts,
    getTrendProducts,
    getCommunityCategories,
}

export default categoryService
