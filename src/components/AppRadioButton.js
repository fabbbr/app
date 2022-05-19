import React, { useEffect, useState } from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'

import GlobalStyle from '@styles/GlobalStyle'

export default function AppRadioButton({ data, onSelect, currentValue }) {
    const [userOption, setUserOption] = useState(null)
    useEffect(() => {
        setUserOption(currentValue)
    })
    const selectHandler = (value) => {
        setUserOption(value)
        onSelect(value)
    }

    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable
                        key={item.value}
                        onPress={() => selectHandler(item.value)}
                        style={styles.container}
                    >
                        <View style={styles.circle}>
                            <View
                                style={
                                    item.value === userOption
                                        ? styles.selected
                                        : ''
                                }
                            ></View>
                        </View>
                        <View>
                            <Text style={styles.label}>{item.label}</Text>
                            <Text style={styles.details}>{item.details}</Text>
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GlobalStyle.color.lightgray3,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    circle: {
        marginRight: 10,
        width: 12,
        height: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalStyle.color.text,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        width: 6,
        height: 6,
        borderRadius: 10,
        backgroundColor: GlobalStyle.color.text,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        color: GlobalStyle.color.text,
    },
})
