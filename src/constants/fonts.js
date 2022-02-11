import * as Font from 'expo-font'

export const getFonts = () => {
    return Font.loadAsync({
        RecoletaRegular: require('@fonts/Recoleta/Recoleta-Regular.ttf'),
        RecoletaMedium: require('@fonts/Recoleta/Recoleta-Medium.ttf'),
        RecoletaBold: require('@fonts/Recoleta/Recoleta-Bold.ttf'),
        RiposteRegular: require('@fonts/Riposte/Riposte-Regular.otf'),
    })
}
