import axios from 'axios'
import { API_URL } from '@constants'

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
    const response = await axios.post(API + 'category/community')
    return response.data
}

const categoryService = {
    getChildCategories,
    getCategoryProducts,
    getTrendProducts,
    getCommunityCategories,
}

export default categoryService
