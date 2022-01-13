import axios from 'axios'
import { API_URL } from '@constants'

const getChildCategories = (id_category) => {
    return axios.post(API_URL + 'category/childs', { id_category })
        .then((response) => {
            return response.data
        })
}

const getCategoryProducts = (id_category) => {
    return axios.post(API_URL + 'category/products', { id_category })
        .then((response) => {
            return response.data
        })
}

const getTrendProducts = () => {
    return axios.post(API_URL + 'category/trend-products')
        .then((response) => {
            return response.data
        })
}

const getCommunityCategories = () => {
    return axios.post(API + 'category/community')
        .then((response) => {
            return response.data
        })
}

const categoryService = {
    getChildCategories,
    getCategoryProducts,
    getTrendProducts,
    getCommunityCategories
}

export default categoryService