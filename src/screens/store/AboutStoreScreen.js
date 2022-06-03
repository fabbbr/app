import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'

import Loading from '@containers/Loading'
import StoreService from '@services/store'

import StoreHeader from '@screens/parts/store/StoreHeader'
import ImageSlider from '@containers/ImageSlider'
import Title from '@components/Title'
import BoxIcon from '@icons/box.svg'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default function AboutStoreScreen({ id }) {
    const { t } = useTranslation()
    const [store, setStore] = useState(false)

    useEffect(() => {
        setStore(false)
        const getStore = async () => {
            try {
                const d = await StoreService.getStore(id)
                if (d) {
                    d.rating = 4.3
                    d.reviews = 233
                    d.medias = ['', '', '']
                }
                setStore(d)
            } catch (error) {
                console.log(error)
            }
        }
        getStore()
    }, [id])

    return (
        <ScrollView style={styles.container}>
            <Loading data={store}>
                {store && (
                    <>
                        <StoreHeader store={store} />
                        <View style={styles.horizontal_lign}></View>
                        <View style={styles.container2}>
                            <Title
                                title={t('description')}
                                icon={<BoxIcon />}
                            />
                            <View style={styles.content_container2}>
                                <Text style={AppStyle.text}>
                                    {store.description}
                                </Text>
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
                    </>
                )}
            </Loading>
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
