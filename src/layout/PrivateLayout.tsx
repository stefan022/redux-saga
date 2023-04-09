import React from "react";

interface IProps {
	children: JSX.Element;
}

const PrivateLayout = ({ children }: IProps) => {
	return <main>{children}</main>;
};

export default PrivateLayout;
