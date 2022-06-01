import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import CategoryService from '@services/category'
import AppTitle from '@components/AppTitle'
import CategoryProducts from '@containers/CategoryProducts'
import Loading from '@containers/Loading'

import HomeStyle from '@styles/HomeStyle'

export default function HomeScreen() {
    const { t } = useTranslation()
    const [data, setData] = useState(false)

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await CategoryService.getCategories()
                setData(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories()
    }, [])

    const categories = require('../../test_data/home_categories.json')

    const categoriesItems = []
    for (let id_category in categories) {
        categoriesItems.push(
            <CategoryProducts
                name={categories[id_category]}
                id_category={id_category}
                key={id_category}
            />
        )
    }

    return (
        <ScrollView style={HomeStyle.container}>
            <Loading data={data}>
                <View style={HomeStyle.community}>
                    <AppTitle text={t('community')} icon="3lines" dash />
                    <Text style={HomeStyle.sub_title}>
                        {t('discover_creation')}
                    </Text>
                    {categoriesItems}
                </View>
            </Loading>
        </ScrollView>
    )
}
