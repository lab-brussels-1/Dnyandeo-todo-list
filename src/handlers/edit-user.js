import { ADD } from "../data/constant.js";
import { urlApi } from "../Api/api.js";
import { userComponent } from "../components/users-data.js"

const add = document.getElementById(ADD);
// export const updateData = async (data) => {
//     console.log(data)
//     updateInfo(data);
// };


export const updateInfo = async (id) => {
    try {
        const res = await fetch(`${urlApi}/${id}`)
        if (res.status === 200) {
            const data = await res.json();
            const response = await fetch(`${urlApi}/${id}`,
                {
                    method: 'PUT',
                    headers:
                    {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ ...data, name: userName, email: userEmail, phone: userPhone, completed: false })
                });
            if (res.status === 200) {
                const newData = await response.json();
                userComponent(newData);
                return newData;
            }
            else {
                console.log(`Error while updating a todo with status : ${res.status}`);
                return false;
            }
        }
        else {
            console.log(`Error while getting a  todo with status : ${res.status}`);
        }
    }
    catch (err) {
        console.error(err);
    }
}

