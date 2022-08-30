import { ADD, INPUT_NAME, MOUSE_CLICK } from "../data/constant.js";
import { getInformation } from "../handlers/add.user.js"

export const getUser = () => {
    document.getElementById(ADD).addEventListener(MOUSE_CLICK, (event) => {
        event.preventDefault();
        getInformation();
    });
}