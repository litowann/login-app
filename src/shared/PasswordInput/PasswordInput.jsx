import {useState} from "react";
import {ErrorMessage, Field} from "formik";
import PropTypes from "prop-types";
import {EyeIcon} from "../../assets/svg";

import "./PasswordInput.scss";

const PasswordInput = ({
    isValid,
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
            <div className={`custom-input${isValid ? "" : "-error"}`}>
                <Field
                    type={type}
                    name="password"
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
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
    isValid: PropTypes.bool,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired
}

export default PasswordInput;