import { StyleSheet } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.light,
    },
    trends: {
        padding: GlobalStyle.container.padding,
        paddingTop: 20,
    },
    sub_title: {
        ...AppStyle.text,
        marginBottom: 20,
    },
    community: {
        marginTop: 30,
        backgroundColor: GlobalStyle.color.background,
        padding: GlobalStyle.container.padding,
        paddingTop: 20,
    },
})
