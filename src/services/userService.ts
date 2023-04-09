import { AxiosResponse } from "axios";
import { IUser } from "typescript/interfaces/IUser";
import httpClient from "utils/httpClient/httpClient";

export const getAllUsers = (): Promise<AxiosResponse<IUser[]>> => {
	return httpClient.get("/users");
};
