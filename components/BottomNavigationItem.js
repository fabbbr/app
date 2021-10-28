import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function BottomNavigationItem({item, navigate}) {
    function onPress() {
        navigate(item)
    }

    return (
        <View 
            style={styles.container}
            onPress={onPress}
            onClick={onPress}
        >
            <Text>{item.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: '10px',
    }
})