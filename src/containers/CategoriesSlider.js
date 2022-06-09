import * as React from 'react'
import {
    ScrollView,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function CategoriesSlider({ categories }) {
    const navigation = useNavigation()

    const navigateToProductList = (id_cat) => {
        navigation.navigate('ProductListScreen', {
            id_category: id_cat,
        })
    }

    return (
        <ScrollView
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {categories.map((category) => {
                return (
                    <TouchableOpacity
                        style={styles.cat_container}
                        key={category.id}
                        onPress={() => navigateToProductList(category.id)}
                    >
                        <Image
                            source={{ uri: category.image }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>{category.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        marginHorizontal: -10,
    },
    cat_container: {
        marginHorizontal: 10,
        alignItems: 'center',
    },
    image: {
        backgroundColor: '#EBEBEB',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 11,
        width: 60,
        textAlign: 'center',
    },
})
