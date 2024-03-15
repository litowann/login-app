import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {resetPasswordPageValidationSchema} from "../../validation/schema";
import {ActionButton, PasswordInput} from "../../shared";
import {ROUTES} from "../../helpers/constants";

const ResetPassword = () => {
    const navigate = useNavigate();

    const initialValues = {
        password: "",
        confirmPassword: ""
    };

    const handleSubmit = (values, {setSubmitting}) => {
        setSubmitting(false);
    };

    const handleReset = () => {
        navigate(ROUTES.LOGIN);
    };

    return (
        <div className="reset-password-page">
            <h2 className="title">Create new Password?</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={resetPasswordPageValidationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting, errors, isValid}) => (
                    <Form>
                        <div className="input-container">
                            <PasswordInput
                                name="password"
                                id="password"
                                label="Password"
                                isValid={isValid}
                            />
                            <PasswordInput
                                name="confirmPassword"
                                id="confirmPassword"
                                label="Confirm Password"
                                isValid={isValid}
                            />
                        </div>
                        <ActionButton
                            text="Reset Password"
                            disabled={isSubmitting}
                            onClick={handleReset}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ResetPassword;