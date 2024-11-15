import { createReducer } from "@reduxjs/toolkit";
import { getCities,getCitiesByName } from "../actions/citiesActions";

const initialState = {
    cities: [],
    citiesFiltered: [],
    loading: true,
    error: false,
}

const citiesReducer = createReducer(initialState, (builder) => {

    //Acciones para el get Cities Total
    builder.addCase(getCities.fulfilled, (state, action) =>{
        state.cities = action.payload
        state.loading = false
    })
    .addCase(getCities.rejected, (state) => {
        state.error = true
        state.loading = false
    })
    .addCase(getCities.pending, (state) => {
        state.loading = true
    })


        //Acciones para el get Cities By Name
        builder.addCase(getCitiesByName.fulfilled, (state, action) => {
            state.citiesFiltered = action.payload
            state.loading = false
        })
        .addCase(getCitiesByName.rejected, (state) => {
            state.error = true
            state.loading = false
        })
        .addCase(getCitiesByName.pending, (state) => {
            state.loading = true
        })


});

export default citiesReducer