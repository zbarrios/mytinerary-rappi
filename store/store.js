import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducer/citiesReducer";
import authReducer from "./reducer/authReducer";


const store = configureStore({
    reducer: {
        citiesStore: citiesReducer,
        authStore: authReducer,
    },
});

export default store