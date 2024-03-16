import {useState} from "react";
import {Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {resetPasswordPageValidationSchema} from "../../validation/schema";
import {ActionButton, PasswordInput} from "../../shared";
import {passwordSetRequest} from "../../actions/restorePasswordActions";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const initialValues = {
        password: "",
        confirmPassword: ""
    };

    const handleSubmit = (values, {setSubmitting}) => {
        setSubmitting(false);
        dispatch(passwordSetRequest(null, null, password))
    };

    return (
        <div className="reset-password-page">
            <h2 className="title">Create new Password?</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={resetPasswordPageValidationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting, isValid, handleChange}) => (
                    <Form>
                        <div className="input-container">
                            <PasswordInput
                                name="password"
                                id="password"
                                label="Password"
                                isValid={isValid}
                                value={password}
                                onChange={(e) => {
                                    handleChange(e);
                                    setPassword(e.target.value);
                                }}
                            />
                            <PasswordInput
                                name="confirmPassword"
                                id="confirmPassword"
                                label="Confirm Password"
                                isValid={isValid}
                                value={confirmPassword}
                                onChange={(e) => {
                                    handleChange(e);
                                    setConfirmPassword(e.target.value);
                                }}
                            />
                        </div>
                        <ActionButton
                            text="Reset Password"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ResetPassword;