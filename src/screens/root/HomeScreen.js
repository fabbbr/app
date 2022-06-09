import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import CategoryService from '@services/category'
import AppTitle from '@components/AppTitle'
import CategoriesSlider from '@containers/CategoriesSlider'
import CategoryProducts from '@containers/CategoryProducts'
import Loading from '@containers/Loading'
import * as Message from '@utils/Message'
import { formatCategoryImage } from '@utils/Tools'
import HomeStyle from '@styles/HomeStyle'

export default function HomeScreen() {
    const { t } = useTranslation()
    const [data, setData] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const d = await CategoryService.getCategoriesFull()
                if (d && Array.isArray(d)) {
                    const cats = d.map((category) => {
                        return {
                            id: category.id,
                            name: category.name,
                            image: formatCategoryImage(category.image),
                        }
                    })
                    setCategories(cats)
                }
                setData(d)
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getCategories()
    }, [])

    return (
        <ScrollView style={HomeStyle.container}>
            <Loading data={data}>
                <View style={HomeStyle.community}>
                    {data && Array.isArray(data) && (
                        <>
                            <CategoriesSlider categories={categories} />
                            <View style={{ marginBottom: 20 }}></View>
                            <AppTitle
                                text={t('community')}
                                icon="3lines"
                                dash
                            />
                            <Text style={HomeStyle.sub_title}>
                                {t('discover_creation')}
                            </Text>
                            {data && Array.isArray(data)
                                ? data.map((category) => {
                                      return category.products &&
                                          category.products.length ? (
                                          <CategoryProducts
                                              name={category.name}
                                              id_category={category.id}
                                              key={category.id}
                                              products={category.products}
                                          />
                                      ) : null
                                  })
                                : null}
                        </>
                    )}
                </View>
            </Loading>
        </ScrollView>
    )
}
