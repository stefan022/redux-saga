import React from "react";

import {
	BrowserRouter,
	Routes as BrowserRoutes,
	Route,
} from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import Home from "../pages/Home";
import { Routes } from "./Routes";

const RoutesComponent = () => {
	return (
		<>
			{/* <ToastContainer /> */}
			<BrowserRouter>
				<BrowserRoutes>
					{/* Private Routes */}
					<Route
						path={Routes.HOME}
						element={
							<PrivateLayout>
								<Home />
							</PrivateLayout>
						}
					/>
					<Route
						path={Routes.MAIN}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>
					<Route
						path={Routes.SLIDE}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>
					<Route
						path={Routes.DASHBOARD}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.CUSTOMERS}`}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.CALENDAR}`}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.CHARTS}`}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.FAQ}`}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>
					<Route
						path={`${Routes.DASHBOARD}${Routes.SUPPORT}`}
						element={
							<PrivateLayout>
								<> </>
							</PrivateLayout>
						}
					/>

					{/* Public Routes */}
					<Route path={Routes.LOGIN} element={<> </>} />
					<Route path={Routes.REGISTER} element={<> </>} />
					<Route path={Routes.NOTFOUND} element={<> </>} />
				</BrowserRoutes>
			</BrowserRouter>
		</>
	);
};

export default RoutesComponent;
