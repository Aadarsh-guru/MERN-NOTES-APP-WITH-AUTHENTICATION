import axios from "axios";

export const saveNote = async(data) => {
    try {
        return await axios.post(`/add`,data)
    } catch (error) {
        console.log(`error while calling saveNote api`,error);
    }
}

export const getNotes = async() => {
    try {
        return await axios.get(`/all`)
    } catch (error) {
        console.log(`error while calling getNotes api`,error);
    }
}

export const getNote = async(id) => {
    try {
        return await axios.get(`/${id}`)
    } catch (error) {
        console.log(`error while calling getNote api`,error);
    }
}

export const editNote = async(id,data) => {
    try {
        return await axios.put(`/${id}`,data)
    } catch (error) {
        console.log(`error while calling editNote api`,error);
    }
}

export const deleteNote = async(id) => {
    try {
        return await axios.delete(`/delete/${id}`)
    } catch (error) {
        console.log(`error while calling deleteNote api`,error);
    }
}
