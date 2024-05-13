import { createSlice } from '@reduxjs/toolkit'

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        reservations: [],
        reservation: []
    },
    reducers: {
        setReservations: (state, action) => {
            state.reservations = action.payload
        },
        setReservations: (state, action) => {
            state.reservations = action.payload
        },
    },
})

export const { setReservations, setReservation} = reservationsSlice.actions
export const reservationsReducer = reservationsSlice.reducer