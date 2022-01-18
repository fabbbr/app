import * as Font from 'expo-font'

export const getFonts = () => {
    Font.loadAsync({
      recoleta: require("@fonts/Recoleta/Recoleta-Regular.ttf"),
      Riposte: require("@fonts/Riposte/Riposte-Regular.otf")
    })
}