import * as React from 'react'
import { Text, View } from 'react-native'

export default function MessageScreen() {
    return (
        <View style={styles.container}>
            <Text>Message!</Text>
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
