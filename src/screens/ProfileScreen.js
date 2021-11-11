import * as React from 'react'
import { Text, View } from 'react-native'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Profile!</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
}
