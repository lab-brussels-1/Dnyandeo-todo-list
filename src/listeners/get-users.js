import {GET, MOUSE_CLICK } from "../data/constant.js";
import { showAllUser } from "../handlers/get-user.js";


export const getUsers = () =>{
    document.getElementById(GET).addEventListener(MOUSE_CLICK, (event)=>{
        event.preventDefault();
        showAllUser();
    });
}