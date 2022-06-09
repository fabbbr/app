import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useTranslation } from 'react-i18next'

import CategoryService from '@services/category'
import { formatCategoryImage } from '@utils/Tools'
import AppTitle from '@components/AppTitle'
import Loading from '@containers/Loading'
import * as Message from '@utils/Message'
import SmallArrowIcon from '@icons/small_arrow.svg'
import GlobalStyle from '@styles/GlobalStyle'
import HomeStyle from '@styles/HomeStyle'

export default function CategoriesScreen({ navigation }) {
    const { t } = useTranslation()
    const [data, setData] = useState(false)

    const navigateToProductList = (id_cat) => {
        navigation.navigate('ProductListScreen', {
            id_category: id_cat,
        })
    }

    useEffect(() => {
        const getCategories = async () => {
            try {
                const d = await CategoryService.getCategories()
                setData(d)
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getCategories()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Loading data={data}>
                <View style={styles.title}>
                    <AppTitle text={t('categories')} icon="3lines" dash />
                    <Text style={HomeStyle.sub_title}>
                        {t('discover_categories')}
                    </Text>
                </View>
                <View style={styles.categories}>
                    {data
                        ? data.map((category, index) => {
                              return (
                                  <TouchableOpacity
                                      activeOpacity={0.8}
                                      style={styles.category}
                                      onPress={() =>
                                          navigateToProductList(category.id)
                                      }
                                      key={index}
                                  >
                                      <Image
                                          source={{
                                              uri: formatCategoryImage(
                                                  category.image
                                              ),
                                          }}
                                          style={styles.category_img}
                                      />
                                      <View style={styles.category_bottom}>
                                          <Text style={styles.category_name}>
                                              {category.name}
                                          </Text>
                                          <SmallArrowIcon />
                                      </View>
                                  </TouchableOpacity>
                              )
                          })
                        : ''}
                </View>
            </Loading>
        </ScrollView>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.background,
    },
    title: {
        padding: GlobalStyle.container.padding,
        paddingBottom: 0,
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: GlobalStyle.container.padding,
        paddingTop: 0,
    },
    category: {
        backgroundColor: GlobalStyle.color.light,
        borderWidth: 1,
        borderColor: GlobalStyle.color.lightgray,
        width: '47%',
        marginBottom: 15,
        borderRadius: 5,
        overflow: 'hidden',
    },
    category_img: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 60,
    },
    category_bottom: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    category_name: {
        fontSize: 16,
    },
}
