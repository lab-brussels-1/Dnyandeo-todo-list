import { INPUT_NAME, INPUT_EMAIL, INPUT_PHONE, ADD } from "../data/constant.js";
import { urlApi } from "../Api/api.js";


const add = document.getElementById(ADD);



export const updateInfo = async (id) => {
    try {
        const userName = document.getElementById(INPUT_NAME).value
        const userEmail = document.getElementById(INPUT_EMAIL).value
        const userPhone = document.getElementById(INPUT_PHONE).value

        const res = await fetch(`${urlApi}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name: userName, email: userEmail, phone: userPhone, completed: false })
        });
        if (res.status == 200) {
            const data = await res.json();
            updateData(data);
        } else {
            console.log(`Something went wrong, Status code:${res.status}`)
        }
    } catch (error) {
        console.log(error)
    }
};

const updateData = async (data) => {
    let info = data;
    add.innerText = 'add'
    userComponent(info);
}
