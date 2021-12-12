import { StyleSheet } from "react-native"
import GlobalStyle from "./GlobalStyle"

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: GlobalStyle.color.background,
      padding: GlobalStyle.container.padding
    },
    title: {
      color: GlobalStyle.color.primary,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: GlobalStyle.size.title,
      marginBottom: 10
    },
    link: {
      color: GlobalStyle.color.primary,
      textDecorationLine: 'underline'
    }
  })