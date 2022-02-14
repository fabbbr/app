import { StyleSheet } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'

const base = {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
}

const base_text = {
    fontFamily: 'RiposteRegular',
    textAlign: 'center',
    fontSize: 14,
}

const styles = {
    default: {
        ...base,
        backgroundColor: GlobalStyle.color.primary,
    },
    default_text: {
        ...base_text,
        color: GlobalStyle.color.light,
    },

    google: {
        ...base,
        backgroundColor: GlobalStyle.color.light,
        borderWidth: 1,
        borderColor: '#eee',
    },
    google_text: {
        ...base_text,
        color: GlobalStyle.color.dark,
    },
    outlined: {
        ...base,
        borderColor: GlobalStyle.color.primary,
        backgroundColor: GlobalStyle.color.light,
    },
    outlined_text: {
        ...base_text,
        color: GlobalStyle.color.primary,
    },
}

const styles2 = {}
for (let key in styles) {
    if (key.substr(key.length - 5) === '_text') {
        styles2[key.substring(0, key.length - 5) + '_medium' + '_text'] = {
            ...styles[key],
            fontSize: 12,
        }
    } else {
        styles2[key + '_medium'] = { ...styles[key] }
    }
}

export default StyleSheet.create({ ...styles, ...styles2 })
