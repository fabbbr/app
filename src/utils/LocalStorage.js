import * as SecureStore from 'expo-secure-store'

export async function set(key, value) {
    return await SecureStore.setItemAsync(key, value)
}

export async function get(key) {
    let result = await SecureStore.getItemAsync(key)
    if(result) {
        return result
    } else {
        return null
    }
}

export async function remove(key) {
    return await SecureStore.deleteItemAsync(key)
}