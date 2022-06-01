import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native'

import GlobalStyle from '@styles/GlobalStyle'

import SliderItem from '@components/SliderItem'
import SliderIndicator from '@components/SliderIndicator'

export default function Slider({ items }) {
    const [pos, setPos] = useState(0)
    const screenWidth = Dimensions.get('window').width
    const height = 300

    const scrollHandler = (event) => {
        setPos(event.nativeEvent.contentOffset.x)
    }

    return (
        <View>
            <ScrollView
                style={{ ...styles.container, width: screenWidth, height }}
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={scrollHandler}
            >
                {items.map((item, index) => {
                    return (
                        <SliderItem
                            key={index}
                            width={screenWidth}
                            height={height}
                            url={item}
                        />
                    )
                })}
            </ScrollView>

            <SliderIndicator
                width={screenWidth}
                length={items.length}
                pos={pos}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: GlobalStyle.color.lightgray,
    },
})
