import { takeLatest } from "redux-saga/effects";
import { getAllUsersSaga } from "./getAllUsers/saga";
import { getAllUsersACS } from "./request";

export function* UsersSaga() {
	yield takeLatest(getAllUsersACS.type, getAllUsersSaga);
}
