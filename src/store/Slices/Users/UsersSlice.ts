import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearch } from "../../../typescript/interfaces/ISearch";
import { IUser } from "../../../typescript/interfaces/IUser";

interface InitialState {
	ctaUsers: IUser[];
	ctaUser: IUser;
	fbqUsers: IUser[];
	fbqUser: IUser;
	search: ISearch;
	status: "idle" | "registered" | "loggedin" | "loggedout";
	jwtToken: string;
	auth: undefined | "user" | "admin";
	changed: boolean;
}

const initialState: InitialState = {
	ctaUsers: [],
	ctaUser: {},
	fbqUsers: [],
	fbqUser: {},
	search: { category: "", info: "", params: "" },
	status: "idle",
	jwtToken: "",
	auth: undefined,
	changed: false,
};

export const usersNamespace = "users";

const userSlice = createSlice({
	name: usersNamespace,
	initialState,
	reducers: {
		setCTAUsersAC: (state, action: PayloadAction<InitialState["ctaUsers"]>) => {
			state.ctaUsers = action.payload;
		},
	},
});

export const { setCTAUsersAC } = userSlice.actions;

export default userSlice;
