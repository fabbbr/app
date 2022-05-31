import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import StoreHeader from '@screens/parts/store/StoreHeader'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'
import BoxIcon from '@icons/box.svg'
import Title from '@components/Title'

export default function AboutStoreScreen({ id }) {
    const store = {
        name: 'Les bijoux de Margaux',
        location: 'Bordeaux, France',
        rating: 4.3,
        review: 233,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisi nisl aliquam eros, euismod aliquam eros nisi euismod. Donec euismod, nisl eget consectetur consectetur, nisi nisl aliquam eros, euismod aliquam eros nisi euismod.',
    }

    return (
        <ScrollView style={styles.container}>
            <StoreHeader store={store} />
            <View style={styles.horizontal_lign}></View>
            <View style={styles.container2}>
                <Title title="Description" icon={<BoxIcon />} />
                <View style={styles.content_container2}>
                    <Text style={AppStyle.text}>{store.description}</Text>
                </View>
            </View>
            <View style={styles.horizontal_lign}></View>
            <View style={styles.container2}>
                <Title title="Multimédias" icon={<BoxIcon />} />
            </View>
            <View style={styles.horizontal_lign}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        flex: 1,
    },
    horizontal_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
    },
    container2: {
        padding: GlobalStyle.container.padding,
    },
    content_container2: {
        marginTop: 10,
    },
})
