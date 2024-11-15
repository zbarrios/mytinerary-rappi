import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("signIn", async (credentials) => {
    console.log("Entramos al signIn");
    const response = await axios.post("http://localhost:8080/mytinerary/auth/signin", credentials);
    console.log("Se esta ejecutando dentro de asyncThunk signIn");
    console.log(response.data.response);
    return response.data.response;
});

const logout = createAsyncThunk("signOut", async () => {
    console.log("Entramos al signOut");
    const response = await axios.post("http://localhost:8080/mytinerary/auth/signout");
    console.log("Se esta ejecutando dentro de asyncThunk signOut");
    console.log(response.data.response);
    return response.data.response;
});

export { login, logout };
