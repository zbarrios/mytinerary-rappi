import { createReducer } from "@reduxjs/toolkit";
import { login,logout } from "../actions/authActions";


const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: false
};

const authReducer = createReducer(initialState, (builder) => {

    //Acciones para el Login
    builder.addCase(login.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.token = action.payload.token,
            state.user = action.payload.user
    })
        .addCase(login.rejected, (state) => {
            state.isAuthenticated = false
            state.token = null,
            state.user = null
        })
        .addCase(login.pending, (state) => {
            state.isAuthenticated = false
            state.token = null,
            state.user = null
        })

        //Acciones para el Logout
    builder.addCase(logout.fulfilled, (state, action) => {
        state.isAuthenticated = false
        state.token = null,
        state.user = null
    })
    .addCase(logout.rejected, (state) => {
        state.isAuthenticated = false
        state.token = null,
        state.user = null
    })
    .addCase(logout.pending, (state) => {
        state.isAuthenticated = false
        state.token = null,
        state.user = null
    })


});

export default authReducer