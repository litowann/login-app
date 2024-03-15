import {useState} from "react";
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {forgotPasswordPageValidationSchema} from "../../validation/schema";
import {ActionButton, EmailInput} from "../../shared";
import {ROUTES} from "../../helpers/constants";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState("");

    const initialValues = {
        email: "",
    };

    const handleSubmit = (values, {setSubmitting}) => {
        setSubmitting(false);
    };

    const handleNavigate = () => navigate(ROUTES.LOGIN);

    const handleSend = () => {
        navigate(ROUTES.RESET_PASSWORD);
    };

    const handleChange = ({target: {value}}) => setEmailValue(value)

    return (
        <div className="forgot-password-page">
            <h2 className="title">Forgot Password?</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={forgotPasswordPageValidationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting, isValid}) => (
                    <Form>
                        <EmailInput
                            isValid={isValid}
                            value={emailValue}
                            onChange={handleChange}
                        />
                        <ActionButton
                            text="Send"
                            disabled={isSubmitting}
                            onClick={handleSend}
                        />
                        <ActionButton
                            isCancelBtn
                            text="Cancel"
                            onClick={handleNavigate}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default ForgotPassword;