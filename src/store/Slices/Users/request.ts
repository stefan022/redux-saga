import { createAction } from "@reduxjs/toolkit";
import { usersNamespace } from "./UsersSlice";

const getAllUsersACS = createAction(`${usersNamespace}/getAllUsersACS`);

export { getAllUsersACS };
