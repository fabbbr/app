import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'

import StoreHeader from '@screens/parts/store/StoreHeader'
import ImageSlider from '@containers/ImageSlider'
import Title from '@components/Title'
import BoxIcon from '@icons/box.svg'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default function AboutStoreScreen({ id }) {
    const { t } = useTranslation()

    const store = {
        name: 'Les bijoux de Margaux',
        location: 'Bordeaux, France',
        rating: 4.3,
        review: 233,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisi nisl aliquam eros, euismod aliquam eros nisi euismod. Donec euismod, nisl eget consectetur consectetur, nisi nisl aliquam eros, euismod aliquam eros nisi euismod.',
        medias: [
            'https://i.etsystatic.com/20363554/r/il/769326/2272267436/il_794xN.2272267436_p3wb.jpg',
            'https://i.etsystatic.com/20363554/r/il/07d049/2319866211/il_794xN.2319866211_em0b.jpg',
            'https://i.etsystatic.com/20363554/r/il/003987/2272267078/il_794xN.2272267078_r3tf.jpg',
        ],
    }

    return (
        <ScrollView style={styles.container}>
            <StoreHeader store={store} />
            <View style={styles.horizontal_lign}></View>
            <View style={styles.container2}>
                <Title title={t('description')} icon={<BoxIcon />} />
                <View style={styles.content_container2}>
                    <Text style={AppStyle.text}>{store.description}</Text>
                </View>
            </View>
            <View style={styles.horizontal_lign}></View>
            <View style={styles.container2}>
                <Title title={t('multimedia')} icon={<BoxIcon />} />
                <View style={styles.content_container2}>
                    <ImageSlider images={store.medias} />
                </View>
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
