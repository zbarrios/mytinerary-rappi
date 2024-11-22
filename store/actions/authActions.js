import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos) => {
    return {
        payload: datos,
    }
})

const logout = createAction("logout");

const login = createAsyncThunk("login", async ({ email, password }) => {

    try {
        console.log("Entramos al Login");
        const credentials = {
            email: email,
            password: password
        }
        console.log(credentials);

        const response = await axios.post("http://localhost:8080/api/auth/signin",credentials)
        console.log("Se proceso la solicitud");

        localStorage.setItem("token", response.data.token)
        return response.data
    } catch (error) {
        console.log("error", error);
    }
})



export { login, setUser, logout };