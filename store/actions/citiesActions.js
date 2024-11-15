import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvcnJlb3Rlc3RAbWFpbC5jb20iLCJpYXQiOjE3MzE2NTM4ODksImV4cCI6MTczMTc0MDI4OX0.PdXUYb0Uh-Xz_J_aP83l7vTtjB0cOvvqc8vGAOWo9qQ";
const getCities = createAsyncThunk("getCities", async () => {
    console.log("Entramos al getCities");
    
    // Realiza la solicitud con el token en el encabezado
    const response = await axios.get("http://localhost:8080/mytinerary/cities/all", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    console.log("Response", response);
    console.log("Se esta ejecutando dentro de asyncThunk getCities");
    console.log(response.data);  //Aquí obtenemos los datos directamente

    return response.data.response;  //Si 'response' está en 'response.data.response'
});


// const getCities = createAsyncThunk("getCities", async () => {
//     console.log("Entramos al getCities");

//     // Realiza la solicitud con el token en el encabezado
//     const response = await fetch("http://localhost:8080/mytinerary/cities/all", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });

//     console.log("Response", response);
    
//     // Convierte la respuesta a JSON
//     const data = await response.json();
//     console.log("Se esta ejecutando dentro de asyncThunk getCities");
//     console.log(data.response);

//     return data.response;  // Asegúrate de retornar la estructura correcta
// });


const getCitiesByName = createAsyncThunk("getCitieByName", async (name) => {
    console.log("Entramos al get Cities By Name");
    const response = await axios.get(`http://localhost:8080/mytinerary/cities/city?name=${name}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    );
    console.log("Se esta ejecutando dentro de asyncthunk getCitieByName");
    console.log(response.data.response);

    return response.data.response;
});

export { getCities, getCitiesByName };