import api from "@/lib/axios";
import type { ProjectFromData } from "../types";

export async function createProject(formData:ProjectFromData) {
    try{
        const {data} = await api.post('/projects', formData)
        return data
    } catch (error) {
        console.log(error)
    }
}