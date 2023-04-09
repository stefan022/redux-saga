import { combineReducers } from "redux";
import userSlice from "./Slices/UsersSlice";

const rootReducer = () => {
	return combineReducers({
		usersSlice: userSlice.reducer,
	});
};

export default rootReducer;
