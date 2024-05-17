import { createSlice } from '@reduxjs/toolkit'

const wcSlice = createSlice({
    name: 'wc',
    initialState: {
        wc: [],
    },
    reducers: {
        setWc: (state, action) => {
            state.wc = action.payload
        },
    },
})

export const { setWc} = wcSlice.actions
export const wcReducer = wcSlice.reducer