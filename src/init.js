import { ADD, GET} from "./data/constant.js";

// Add user data
import {addUser} from "./listeners/add-user.js";
addUser(document.getElementById(ADD));


// Get all user data
import{getUsers} from "./listeners/get-users.js";
getUsers(document.getElementById(GET));
