import * as React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import GlobalStyle from '@styles/GlobalStyle'
import SmallArrowIcon from '@icons/small_arrow.svg'

export default function CategoriesScreen({ navigation }) {
    const { t } = useTranslation()

    const navigateToProductList = (id_cat) => {
        navigation.navigate('ProductListScreen', {
            id_category: id_cat,
        })
    }

    let categories = []
    for (let i = 0; i < 16; i++) {
        categories.push({ name: 'Bijoux', id_cat: 1 })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.categories}>
                {categories.map((category, index) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.category}
                            onPress={() =>
                                navigateToProductList(category.id_cat)
                            }
                            key={index}
                        >
                            <View style={styles.category_img}></View>
                            <View style={styles.category_bottom}>
                                <Text style={styles.category_name}>
                                    {category.name}
                                </Text>
                                <SmallArrowIcon />
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.background,
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: GlobalStyle.container.padding,
    },
    category: {
        backgroundColor: GlobalStyle.color.light,
        borderWidth: 1,
        borderColor: GlobalStyle.color.lightgray,
        width: '47%',
        marginBottom: 15,
        borderRadius: 5,
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
