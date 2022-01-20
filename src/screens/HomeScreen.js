import * as React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import CategoryService from '@services/category'
import AppTitle from '@components/AppTitle'
import ProductsSlider from '@containers/ProductsSlider'
import CategoryProducts from '@containers/CategoryProducts'

import HomeStyle from '@styles/HomeStyle'

export default function HomeScreen() {
    const { t } = useTranslation()

    const data = require('../test_data/home_category_products.json')
    const categories = require('../test_data/home_categories.json')

    const categoriesItems = []
    for(let id_category in categories) {
        categoriesItems.push(<CategoryProducts name={categories[id_category]} id_category={id_category} key={id_category} />)
    }

    return (
        <ScrollView style={HomeStyle.container}>
            <View style={HomeStyle.trends}>
                <AppTitle text={t('trends')} icon="3lines" dash />
                <Text style={HomeStyle.sub_title}>{t('creation_recommendation')}</Text>
                <ProductsSlider products={data} />
            </View>

            <View style={HomeStyle.community}>
                <AppTitle text={t('community')} icon="3lines" dash />
                <Text style={HomeStyle.sub_title}>{t('discover_creation')}</Text>
                {categoriesItems}
            </View>
        </ScrollView>
    );
}