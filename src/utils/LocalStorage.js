import * as SecureStore from 'expo-secure-store'

export const set = async (key, value) => {
    return await SecureStore.setItemAsync(key, value)
}

export const get = async (key) => {
    let result = await SecureStore.getItemAsync(key)
    if (result) {
        return result
    } else {
        return null
    }
}

export const remove = async (key) => {
    return await SecureStore.deleteItemAsync(key)
}
