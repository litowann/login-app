import {ErrorMessage, Field} from "formik";
import PropTypes from "prop-types";

import "./EmailInput.scss";

const EmailInput = ({
    placeholder = "Email",
    onBlur
}) => (
    <div className="email-input">
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
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
}

export default EmailInput;