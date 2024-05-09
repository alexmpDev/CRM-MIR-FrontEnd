import { createSlice } from '@reduxjs/toolkit'

const phoneSlice = createSlice({
    name: 'phones',
    initialState: {
        phones: [],
        selectedPhone: {},
    },
    reducers: {
        setPhones: (state, action) => {
            state.phones = action.payload
        },
        setPhone: (state, action) => {
            state.selectedPhone = action.payload
        },
    },
})

export const { setPhones, setPhone } = phoneSlice.actions
export const phoneReducer = phoneSlice.reducer