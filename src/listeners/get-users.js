import {GET, MOUSE_CLICK } from "../data/constant.js";
import { showAllUser } from "../components/users-data.js";


export const getUsers = () =>{
    document.getElementById(GET).addEventListener(MOUSE_CLICK, (event)=>{
        event.preventDefault();
        showAllUser();
    });
}