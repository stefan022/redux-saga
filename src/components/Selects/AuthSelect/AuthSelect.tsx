import { ChangeEventHandler } from 'react';
import { jwtAdmin, jwtUser } from 'utils/helpers/jwt'

interface IProps {
    auth: string;
    handleChange: ChangeEventHandler<HTMLSelectElement>;
    id: number;
};

const AuthSelect = ({ auth, handleChange, id }: IProps): JSX.Element => {
    const userId = localStorage.getItem("user");
    
    return (
        <select 
            className="table__body-td__select"
            defaultValue={auth === jwtAdmin ? "admin" : "user"} 
            onChange={handleChange}
            disabled={userId! === id.toString() ? true : false}
        >
            <option
                value={auth === jwtAdmin ? "admin" : "user"} 
            >
                {auth === jwtAdmin ? "admin" : "user"}
            </option>
            <option 
                value={auth === jwtUser ? "admin" : "user"}
            >
                {auth === jwtUser ? "admin" : "user"}
            </option>
        </select>
    )
}

export default AuthSelect