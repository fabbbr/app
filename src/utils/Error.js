import { setMessage } from '@slices/message'

export const slice = (thunkAPI, error) => {
    const err = standard(error)
    thunkAPI.dispatch(
        setMessage({
            message: 'errors:' + (err.message ? err.message : 'UNKNOWN_ERROR'),
            messageType: 'danger',
        })
    )
    return thunkAPI.rejectWithValue()
}

export const standard = (error) => {
    return error.response.data
}
