import { StyleSheet } from "react-native"
import GlobalStyle from "@styles/GlobalStyle"

const base = {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10
}
const base_text = {
    textAlign: 'center'
}

export default StyleSheet.create({
    default: {
        ...base,
        backgroundColor: GlobalStyle.color.primary
    },
    default_text: {
        ...base_text,
        color: GlobalStyle.color.light
    },

    google: {
        ...base,
        backgroundColor: GlobalStyle.color.light,
        borderWidth: 1,
        borderColor: '#eee'
    },
    google_text: {
        ...base_text,
        color: GlobalStyle.color.dark
    }
})