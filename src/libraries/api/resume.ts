const api_url = import.meta.env.VITE_API_URL
import axios from "axios"

const api = axios.create({
    baseURL: api_url,
    headers: {
        "Content-Type":"application/json",
        "Authorization": "Bearer token_goes_here"
    }
})

export const generateResume = async() => {
    
    try{
        
    }
    catch(err){

    }
}