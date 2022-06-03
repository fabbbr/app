import * as React from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'

export default function ImageSlider({ images }) {
    return (
        <ScrollView
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {images.map((image, index) => {
                return (
                    <View style={styles.img_container} key={index}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.img} />
                        ) : (
                            <View style={styles.img}></View>
                        )}
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        marginHorizontal: -5,
    },
    img_container: {
        width: 240,
        height: 240,
        backgroundColor: '#EBEBEB',
        margin: 5,
    },
    img: {
        width: 240,
        height: 240,
    },
})
