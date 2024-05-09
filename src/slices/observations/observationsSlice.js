import { createSlice } from '@reduxjs/toolkit'

const observationsSlice = createSlice({
    name: 'observations',
    initialState: {
        observations: [],
        selectedObservation: {},
    },
    reducers: {
        setObservations: (state, action) => {
            state.observations = action.payload
        },
        setObservation: (state, action) => {
            state.selectedObservation = action.payload
        },
    },
})

export const { setObservations, setObservation } = observationsSlice.actions
export const observationReducer = observationsSlice.reducer