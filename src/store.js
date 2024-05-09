import { configureStore } from '@reduxjs/toolkit'
import { studentReducer } from './slices/students/studentsSlice';
import { bookReducer } from './slices/books/booksSlice';
import { phoneReducer } from './slices/phones/phonesSlice';
import { observationReducer } from './slices/observations/observationsSlice';


const store = configureStore({
    reducer: {
        students: studentReducer,
        books: bookReducer,
        phones: phoneReducer,
        observations: observationReducer
    },
}) 

export default store;