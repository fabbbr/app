import { StyleSheet } from "react-native"
import GlobalStyle from "@styles/GlobalStyle"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: GlobalStyle.container.padding,
        backgroundColor: GlobalStyle.color.light
    },

    sub_title: {
        color: GlobalStyle.color.text2,
        fontSize: 12
    }
})