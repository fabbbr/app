import { StyleSheet } from "react-native"
import GlobalStyle from "@styles/GlobalStyle"

export default StyleSheet.create({
    box: {
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: GlobalStyle.color.light,
        borderColor: GlobalStyle.color.darklight
    },
    label: {
        color: GlobalStyle.color.darklight
    },
    input: {
        color: GlobalStyle.color.dark
    }
})

