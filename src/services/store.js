import axios from 'axios'
import { API_URL } from '@constants'

const getStore = async (id_store) => {
    const response = await axios.post(`${API_URL}store/${id_store}`)
    return response.data
}

const StoreService = {
    getStore,
}

export default StoreService
