import { urlApi } from "../Api/api.js";



export const getUsersAll = async () => {
    try {
        const res = await fetch(urlApi);
        if (res.status != 200) {
            throw new Error(`Some Error, status code:${res.status}`)
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
