import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import quantityReducer from '../features/quantitySlice';

export const store = configureStore({
    reducer:{
        user:userReducer,
        quantity:quantityReducer
    }
})


