import { setMessage } from '@slices/message'

export const slice = (thunkAPI, error) => {
    const err = standard(error)
    thunkAPI.dispatch(
        setMessage({
            message: err.message,
            messageType: 2,
        })
    )
    return thunkAPI.rejectWithValue()
}

export const standard = (error) => {
    return error.response.data
}
