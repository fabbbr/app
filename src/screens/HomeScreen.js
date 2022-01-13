import * as React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import CategoryService from '@services/category'
import AppTitle from '@components/AppTitle'
import ProductsSlider from '@containers/ProductsSlider'

import HomeStyle from '@styles/HomeStyle'
import GlobalStyle from '@styles/GlobalStyle'

export default function HomeScreen() {
    const { t } = useTranslation()

    const data = require('../test_data/home_category_products.json');
    console.log(data)

    return (
        <View style={HomeStyle.container}>
            <AppTitle text={t('trends')} icon="3lines" dash />
            <Text style={HomeStyle.sub_title}>{t('creation_recommendation')}</Text>
            <ProductsSlider products={data} />
        </View>
    );
}