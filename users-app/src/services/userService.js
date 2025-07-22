import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/user'

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL+'/list-user')
        
        return response;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.warn("No hay usuarios creados");
            return []; // devolvés lista vacía al front para que no rompa
        }
        console.error("Error inesperado:", error);
        throw error;
    }
}

export const save = async({user}) => {
    try {
        return await axios.post(BASE_URL+'/create-user',{
            user
        })
    } catch (error) {
        console.error("Error inesperado:", error);
        throw error;
    }
}


export const update = async({id,username,email}) => {
    try {
        return await axios.put(`${BASE_URL}/update-user/${id}`,{
            username,
            email
        })
    } catch (error) {
        console.error("Error inesperado:", error);
        throw error;
    }
}


export const remove = async({id}) => {
    try {
        await axios.put(`${BASE_URL}/delete-user/${id}`)
    } catch (error) {
        console.error("Error inesperado:", error);
        throw error;
    }
}