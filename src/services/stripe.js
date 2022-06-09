import { Alert } from 'react-native'
import { API_URL } from '@constants/'
import * as Message from '@utils/Message'

export async function fetchPublishableKey() {
    try {
        const response = await fetch(`${API_URL}/config`)
        const { publishableKey } = await response.json()
        return publishableKey
    } catch (e) {
        Alert.alert(
            'Error',
            'Unable to fetch publishable key. Is your server running?'
        )
        return null
    }
}
