import { urlApi } from "../Api/api.js";
import { userComponent } from "../components/users-data.js"



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
};


export const showAllUser = async () => {
    const userAll = await getUsersAll()
    userAll.forEach(user => {
        userComponent(user);
    })
};

export default getUsersAll;