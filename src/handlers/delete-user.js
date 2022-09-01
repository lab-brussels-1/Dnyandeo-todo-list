import { urlApi } from "../Api/api.js";

export const removeUser = async (id) =>{
    try {
        const res = fetch(`${urlApi}/${id}`, {
            method: "DELETE",
        });
        if(res.status != 200){
            throw new Error(`Something went wrong, Status code::${response.status}`);  
        }
        const post = await res.json();
        return post  
    } catch (error) {
        console.error(error);
    }
}
