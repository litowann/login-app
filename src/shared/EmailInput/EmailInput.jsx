import {ErrorMessage, Field} from "formik";
import PropTypes from "prop-types";

import "./EmailInput.scss";

const EmailInput = ({
    isValid,
    value,
    onChange,
    placeholder = "Email"
}) => (
    <div className={`email-input${isValid ? "" : "-error"}`}>
        <Field
            type="email"
            id="email"
            name="email"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        <ErrorMessage name="email" component="div" className="error"/>
    </div>
);

EmailInput.propTypes = {
    isValid: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}

export default EmailInput;