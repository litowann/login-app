import {ErrorMessage, Field} from "formik";
import PropTypes from "prop-types";

import "./EmailInput.scss";

const EmailInput = ({
    placeholder = "Email",
    onBlur,
    onChange,
    value
}) => (
    <div className="email-input">
        <Field
            type="email"
            id="email"
            name="email"
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
        />
        <ErrorMessage name="email" component="div" className="error"/>
    </div>
);

EmailInput.propTypes = {
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default EmailInput;