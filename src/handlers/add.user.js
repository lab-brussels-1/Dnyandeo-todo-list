import { INPUT_NAME, INPUT_EMAIL, INPUT_PHONE, DELETE_USER, OUTPUT } from "../data/constant.js";
import { urlApi } from "../Api/api.js";
import {removeUser} from "./delete-user.js"


export const getInformation = async () => {
    try {
        const userName = document.getElementById(INPUT_NAME).value;
        const userEmail = document.getElementById(INPUT_EMAIL).value;
        const userPhone = document.getElementById(INPUT_PHONE).value;

        const userOut = document.getElementById(OUTPUT);

        const res = await fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name: userName, email: userEmail, phone: userPhone, completed: false })
        });

        // output of container

        if (res.status == 201) {
            const data = await res.json();

            const container = document.createElement('div');
            container.classList.add('user-list')

            // create first p element for name

            const pNameEl = document.createElement('p');
            pNameEl.classList.add('name');
            pNameEl.textContent = data.name;
            container.appendChild(pNameEl);

            // create second p element for email

            const pEmailEl = document.createElement('p');
            pEmailEl.classList.add('email');
            pEmailEl.textContent = data.email;
            container.appendChild(pEmailEl);

            // create third p element for phone

            const pPhoneEl = document.createElement('p');
            pPhoneEl.classList.add('phone');
            pPhoneEl.textContent = data.phone;
            container.appendChild(pPhoneEl);
            userOut.append(container);

            // create first button for edit 

            const editBtn = document.createElement('button')
            editBtn.classList.add('btn', 'edit-btn');
            editBtn.setAttribute('id', 'edit-btn');
            const editIcon = document.createElement('i');
            editIcon.classList.add('icon3', 'fa-solid', 'fa-pen-to-square');
            editBtn.appendChild(editIcon);
            container.appendChild(editBtn);

            // create second button for delete

            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('btn', 'delete-btn');
            deleteBtn.setAttribute('id', 'delete-btn');
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('icon2', 'fa-solid', 'fa-trash');
            deleteBtn.appendChild(deleteIcon);
            container.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", function () {
                removeUser(data.id)
                container.remove();
            });

        }
    } catch (error) {
        console.log(error)
    }
};
