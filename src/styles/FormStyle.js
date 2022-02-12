import { StyleSheet } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'

export default StyleSheet.create({
    wrapper: {
        marginVertical: 8,
    },
    box: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: GlobalStyle.color.light,
        borderColor: GlobalStyle.color.gray,
    },
    label: {
        color: GlobalStyle.color.gray,
        fontFamily: 'RiposteRegular',
    },
    input: {
        color: GlobalStyle.color.dark,
        fontFamily: 'RiposteRegular',
    },
    error: {
        color: GlobalStyle.color.red,
    },
})
