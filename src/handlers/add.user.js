import { INPUT_NAME, INPUT_EMAIL, INPUT_PHONE } from "../data/constant.js";
import { urlApi } from "../Api/api.js";
import { userComponent } from "../components/users-data.js"

// Add user data

export const getInformation = async () => {
    try {
        const userName = document.getElementById(INPUT_NAME).value;
        const userEmail = document.getElementById(INPUT_EMAIL).value;
        const userPhone = document.getElementById(INPUT_PHONE).value;

        const res = await fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name: userName, email: userEmail, phone: userPhone, completed: false })
        });
        if (res.status == 201) {
            const data = await res.json();
            userComponent(data);
        }else{
            console.log(`Something went wrong, Status code:${res.status}`)
        }
    } catch (error) {
        console.log(error)
    }
};

export default getInformation;