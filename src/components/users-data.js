import { OUTPUT } from "../data/constant.js"
import { getUsersAll } from "../handlers/get-user.js";


export const showAllUser = async () => {
    const userAll = await getUsersAll()
    userAll.forEach(user => {
        const userOut = document.getElementById(OUTPUT);

        // create div element with user-list class

        const container = document.createElement('div');
        container.classList.add('user-list')
        // create first p element for name
        const pNameEl = document.createElement('p');
        pNameEl.classList.add('name');
        pNameEl.textContent = user.name;
        container.appendChild(pNameEl);

        // create second p element for email

        const pEmailEl = document.createElement('p');
        pEmailEl.classList.add('email');
        pEmailEl.textContent = user.email;
        container.appendChild(pEmailEl);

        // create third p element for phone

        const pPhoneEl = document.createElement('p');
        pPhoneEl.classList.add('phone');
        pPhoneEl.textContent = user.phone;
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
    })
};


