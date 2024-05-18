import { configureStore } from '@reduxjs/toolkit'
import { studentReducer } from './slices/students/studentsSlice';
import { bookReducer } from './slices/books/booksSlice';
import { phoneReducer } from './slices/phones/phonesSlice';
import { observationReducer } from './slices/observations/observationsSlice';
import { reservationsReducer } from './slices/reservations/reservationsSlice';
import { wcReducer } from './slices/wc/wcSlice';
import { authReducer } from './slices/auth/authSlice';
import { eventReducer } from './slices/events/eventsSlice';


const store = configureStore({
    reducer: {
        students: studentReducer,
        events: eventReducer,
        books: bookReducer,
        phones: phoneReducer,
        observations: observationReducer,
        reservations: reservationsReducer,
        wc: wcReducer,
        auth: authReducer
    },
}) 

export default store;