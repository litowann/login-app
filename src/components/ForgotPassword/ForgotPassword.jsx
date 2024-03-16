import {useState} from "react";
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordPageValidationSchema} from "../../validation/schema";
import {ActionButton, EmailInput} from "../../shared";
import {ROUTES} from "../../helpers/constants";
import {passwordResetRequest} from "../../actions/restorePasswordActions";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);

    const initialValues = {
        email: "",
    };

    const handleSubmit = (values, {setSubmitting}) => {
        dispatch(passwordResetRequest(email));

        if (!error) {
            setSubmitting(false);
            navigate(ROUTES.RESET_PASSWORD);
        }
    };

    const handleCancel = () => {
        navigate(ROUTES.LOGIN);
    };

    return (
        <div className="forgot-password-page">
            <h2 className="title">Forgot Password?</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={forgotPasswordPageValidationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting, isValid, handleChange}) => (
                    <Form>
                        <EmailInput
                            isValid={isValid}
                            value={email}
                            onChange={(e) => {
                                handleChange(e);
                                setEmail(e.target.value);
                            }}
                        />
                        <ActionButton
                            text="Send"
                            disabled={isSubmitting}
                        />
                        <ActionButton
                            isCancelBtn
                            text="Cancel"
                            onClick={handleCancel}
                            type="button"
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default ForgotPassword;