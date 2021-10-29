import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export default function BottomNavigationItem({item, navigate}) {
    function onPress() {
        navigate(item)
    }

    return (
        <View>
            <TouchableOpacity 
                onPress={onPress}
                style={styles.button}
            >
                <Text>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 10
    }
})