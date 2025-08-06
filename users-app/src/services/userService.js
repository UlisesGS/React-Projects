import axios from "axios"

const BASE_URL = 'http://localhost:8080/users'

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL)
        
        return response;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return []; // devolvés lista vacía al front para que no rompa
        }
        throw error;
    }
}

export const save = async(user) => {
    try {
        return await axios.post(BASE_URL, user);
    } catch (error) {
        console.error();
        throw error;
    }
}


export const update = async({id,username,email}) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`,{
            username,
            email
            //password:'nada'
        })
    } catch (error) {
        console.error();
        throw error;
    }
}


export const remove = async(id) => {
    try {
        
        await axios.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        console.error();
        throw error;
    }
}