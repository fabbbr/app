import { setMessage } from '@slices/message'
import Toast from 'react-native-toast-message'
import i18n from '@constants/IMLocalize'

export const error = ({
    text1,
    text2 = '',
    thunkAPI = false,
    dispatch = false,
}) => {
    if (thunkAPI) {
        const err = standardizeError(text1)
        text1 = err.message
        if (text1) text1 = 'errors:' + text1
    }
    if (thunkAPI && dispatch && text1) {
        thunkAPI.dispatch(
            setMessage({
                message: 'errors:' + text1,
                messageType: 'error',
            })
        )
        return thunkAPI.rejectWithValue()
    } else if (text1) {
        if (!text2) {
            Toast.show({
                type: 'error',
                text1: i18n.t(text1),
            })
        } else {
            Toast.show({
                type: 'error',
                text1: i18n.t(text1),
                text2: i18n.t(text2),
            })
        }
    } else {
        Toast.show({
            type: 'error',
            text1: i18n.t('errors:UNKNOWN_ERROR1'),
            text2: i18n.t('errors:UNKNOWN_ERROR2'),
        })
    }
}
const standardizeError = (error) => {
    return error.response.data
}

export const success = ({ text1, text2 = '' }) => {
    if (!text2) {
        Toast.show({
            type: 'success',
            text1: i18n.t(text1),
        })
    } else {
        Toast.show({
            type: 'success',
            text1: i18n.t(text1),
            text2: i18n.t(text2),
        })
    }
}
