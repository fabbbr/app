import { StyleSheet } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'

export default StyleSheet.create({
    h1: {
        fontFamily: 'RecoletaBold',
        color: GlobalStyle.color.primary,
        fontSize: 24,
    },
    h2: {
        fontFamily: 'RecoletaMedium',
        fontSize: 20,
    },
    h3: {
        fontFamily: 'RecoletaMedium',
        fontSize: 16,
    },
    h3_bold: {
        fontFamily: 'RecoletaBold',
        fontSize: 16,
    },
    text: {
        fontFamily: 'RiposteRegular',
        fontSize: 14,
        color: GlobalStyle.color.text,
    },
})
