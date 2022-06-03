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
                const d = await CategoryService.getCategoriesFull()
                setData(d)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories()
    }, [])

    return (
        <ScrollView style={HomeStyle.container}>
            <Loading data={data}>
                <View style={HomeStyle.community}>
                    <AppTitle text={t('community')} icon="3lines" dash />
                    <Text style={HomeStyle.sub_title}>
                        {t('discover_creation')}
                    </Text>
                    {data && Array.isArray(data)
                        ? data.map((category) => {
                              return (
                                  <CategoryProducts
                                      name={category.name}
                                      id_category={category.id}
                                      key={category.id}
                                      products={category.products}
                                  />
                              )
                          })
                        : ''}
                </View>
            </Loading>
        </ScrollView>
    )
}
