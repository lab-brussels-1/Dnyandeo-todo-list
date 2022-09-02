import { ADD, MOUSE_CLICK } from "../data/constant.js";
import { getInformation } from "../handlers/add.user.js"

export const addUser = () => {
    document.getElementById(ADD).addEventListener(MOUSE_CLICK, (event) => {
        event.preventDefault();
        getInformation();
        const userName = document.getElementById(INPUT_NAME).value='';
        const userEmail = document.getElementById(INPUT_EMAIL).value='';
        const userPhone = document.getElementById(INPUT_PHONE).value='';
    });
}