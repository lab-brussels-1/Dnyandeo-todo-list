import { INPUT_NAME, INPUT_EMAIL, INPUT_PHONE } from "../data/constant.js";
import{urlApi} from "../Api/api.js"
export const updateInfo = async (id) => {
    try {
        // const userName = document.getElementById(INPUT_NAME)
        // const userEmail = document.getElementById(INPUT_EMAIL)
        // const userPhone = document.getElementById(INPUT_PHONE)

        const res = await fetch(`${urlApi}/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name: userName, email: userEmail, phone: userPhone, completed: false })
        });
        if (res.status == 200) {
            const data = await res.json();
            userComponent(data);
        }else{
            console.log(`Something went wrong, Status code:${res.status}`)
        }
    } catch (error) {
        console.log(error)
    }
};