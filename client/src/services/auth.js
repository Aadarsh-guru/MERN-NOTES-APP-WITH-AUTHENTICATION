import axios from "axios";

export const userLogin = async(data)=>{
    try {
        return await axios.post(`/login`,data)
    } catch (error) {
        console.log(`error while calling login api`, error);
    }
}

export const userSignup = async(data)=>{
    try {
        return await axios.post(`/signup`,data)
    } catch (error) {
        console.log(`error while calling signup api`, error);
    }
}