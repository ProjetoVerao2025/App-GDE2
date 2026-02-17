import { apiPostRequest, apiGetRequest } from "./api";
// data: type => input da funcao, definir aq os tipos
// return apiRequest("/login/", "POST", data);
// export async function(data:type)

// fetch("http://localhost:8000/register/", requestOptions)
export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

// Para funcoes GET usar esse "modelo"

// export async function registerData(data:RegisterPayload) {
//     return apiRequest("/register/", "POST", data);
// }

export async function registerData(data:RegisterPayload) {
    return apiPostRequest("/register/", "POST", data);
}