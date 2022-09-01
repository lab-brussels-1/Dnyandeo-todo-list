import { ADD, GET, DELETE_USER} from "./data/constant.js";


import {addUser} from "./listeners/add-user.js";
addUser(document.getElementById(ADD));

import{getUsers} from "./listeners/get-users.js";
getUsers(document.getElementById(GET));


import{deleteUser} from "./listeners/delete-user.js";
deleteUser(document.getElementById(DELETE_USER));
