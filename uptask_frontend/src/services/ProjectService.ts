import api from "@/lib/axios";
import { dashboardProjectSchema, type ProjectFromData } from "../types";
import { isAxiosError } from "axios";

export async function createProject(formData:ProjectFromData) {
    try{
        const {data} = await api.post('/projects', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}


export async function getProjects() {
    try{
        const {data} = await api.post('/projects')
        const response = dashboardProjectSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}