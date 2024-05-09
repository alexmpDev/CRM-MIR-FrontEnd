import { createSlice } from '@reduxjs/toolkit'

const phoneSlice = createSlice({
    name: 'phones',
    initialState: {
        phones: [],
    },
    reducers: {
        setPhones: (state, action) => {
            state.phones = action.payload
        },
    },
})

export const { setPhones} = phoneSlice.actions
export const phoneReducer = phoneSlice.reducer