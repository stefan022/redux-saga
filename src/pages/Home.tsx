import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsersACS } from "store/Slices/Users/request";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsersACS());

		// eslint-disable-next-line
	}, []);
	return <div>Home</div>;
};

export default Home;
