import { useState, ChangeEventHandler, FocusEventHandler } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import FormikError from '../FormikError/FormikError';

interface IProps {
    id: string;
    value: string;
    error: string | undefined;
    touched: boolean | undefined;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleBlur: FocusEventHandler<HTMLInputElement>;
};

const FormikPassword = ({ id, value, touched, error, handleChange, handleBlur }: IProps): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className="form__div">
            <label className="form__label" htmlFor={id}>Password</label>
            <div className="form__password">
                <input
                    className={touched && error ? "form__input border-red-400" : "form__input"}
                    id={id}
                    type={isActive ? "text" : "password"}
                    name={id}
                    placeholder="*********"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className="form__password-eye">
                    {isActive ? (
                        <AiOutlineEye onClick={() => setIsActive(!isActive)} />
                    ) : (
                        <AiOutlineEyeInvisible onClick={() => setIsActive(!isActive)} />
                    )}
                </div>
            </div>
            <FormikError touched={touched} error={error}/>
        </div>
    )
}

export default FormikPassword