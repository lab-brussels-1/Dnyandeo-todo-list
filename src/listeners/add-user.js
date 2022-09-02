import { ADD, MOUSE_CLICK } from "../data/constant.js";
import { getInformation } from "../handlers/add.user.js"

export const addUser = () => {
    document.getElementById(ADD).addEventListener(MOUSE_CLICK, (event) => {
        event.preventDefault();
        getInformation();
    });
}