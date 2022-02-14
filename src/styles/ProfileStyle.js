import { StyleSheet } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: GlobalStyle.color.background,
        padding: GlobalStyle.container.padding,
    },
    title: {
        ...AppStyle.h1,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bottom_text: {
        color: GlobalStyle.color.gray,
        marginBottom: 5,
        fontFamily: 'RiposteRegular',
    },
    link: {
        color: GlobalStyle.color.primary,
        textDecorationLine: 'underline',
        fontFamily: 'RiposteRegular',
    },
})
