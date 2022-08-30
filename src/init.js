import { ADD, INPUT_NAME, INPUT_EMAIL, INPUT_PHONE, OUTPUT, MOUSE_CLICK } from "./data/constant.js";



import {getUser} from "./listeners/add-user.js"
getUser(document.getElementById(ADD));










// const getInformation = async () => {
//     try {
//         const userName = document.getElementById(INPUT_NAME).value;
//         const userEmail = document.getElementById(INPUT_EMAIL).value;
//         const userPhone = document.getElementById(INPUT_PHONE).value;
        
//         const res = await fetch('http://localhost:5000/todos', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify({ name: userName, email: userEmail, phone: userPhone, completed: false })
//         });
//         if (res.status == 201) {
//             const data = await res.json();
//             return data 
//         }else{
//             console.log(`Error while posting todo with status : ${res.status}`);
//             return false;
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }




// const userOutput = async () => {
//     debugger
//     const user = await getInformation()
//     console.log(user)

// }


// const output = document.getElementById(OUTPUT);
// output.innerHTML = `<div class="user-list">
//                                 <ul class="user">
//                                 <li class="name">${data.name}</li>
//                                 <li class="email">${data.email}</li>
//                                 <li class="phone">${data.phone}</li>
//                                 </ul>
// <div class="btns">
//         <button class="btn edit-btn" id="edit-btn"><i class="icon3 fa-solid fa-pen-to-square"></i>Edit</button>
//         <button class="btn delete-btn" id="delete-btn"><i class="icon2 fa-solid fa-trash"></i>Delete</button>  
//     </div>  
// </div>`