import * as Font from 'expo-font'

export const getFonts = () => {
    return Font.loadAsync({
      RecoletaRegular: require("@fonts/Recoleta/Recoleta-Regular.ttf"),
      RecoletaBold: require("@fonts/Recoleta/Recoleta-Bold.ttf"),
      RiposteRegular: require("@fonts/Riposte/Riposte-Regular.otf")
    })
}