import {useState} from "react";
import {ErrorMessage, Field} from "formik";
import PropTypes from "prop-types";
import {EyeIcon} from "../../assets/svg";

import "./PasswordInput.scss";

const PasswordInput = ({
    placeholder = "Password",
    id,
    name,
    label,
    onChange,
    value
}) => {
    const [type, setType] = useState("password");

    const handleEyeClick = () =>
        setType(type === "password" ? "text" : "password");

    return (
        <div className="password-input">
            {label && (
                <label>
                    {label}
                </label>
            )}
            <div className="custom-input">
                <Field
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                <span className="eye-icon" onClick={handleEyeClick}>
                    <EyeIcon/>
                </span>
            </div>
            <ErrorMessage
                name={name}
                component="div"
                className="error"
            />
        </div>
    )
};

PasswordInput.propTypes = {
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default PasswordInput;