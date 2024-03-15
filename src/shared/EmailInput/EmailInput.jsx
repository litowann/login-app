import {ErrorMessage, Field} from "formik";
import PropTypes from "prop-types";

import "./EmailInput.scss";

const EmailInput = ({
    isValid,
    placeholder = "Email",
    onBlur
}) => (
    <div className={`email-input${isValid ? "" : "-error"}`}>
        <Field
            type="email"
            id="email"
            name="email"
            placeholder={placeholder}
            onBlur={onBlur}
        />
        <ErrorMessage name="email" component="div" className="error"/>
    </div>
);

EmailInput.propTypes = {
    isValid: PropTypes.bool,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
}

export default EmailInput;