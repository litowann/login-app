import {useState} from "react";
import {Formik, Form} from "formik";
import {Link} from "react-router-dom";
import {loginPageValidationSchema} from "../../validation/schema";
import {
    ActionButton,
    Delimiter,
    EmailInput,
    PasswordInput,
    ThirdPartyButton
} from "../../shared";
import {GoogleIcon, GithubIcon} from "../../assets/svg";

import "./Login.scss";

const Login = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, {setSubmitting}) => {
        setSubmitting(false);
    };

    const handleEmailChange = ({target: {value}}) => setEmailValue(value);

    const handlePasswordChange = ({target: {value}}) => setPasswordValue(value);

    return (
        <div className="login-page">
            <h2 className="title">Log in to your account</h2>
            <div className="btn-container">
                <ThirdPartyButton
                    icon={<GoogleIcon/>}
                    text="Google"
                />
                <ThirdPartyButton
                    icon={<GithubIcon/>}
                    text="Github"
                />
            </div>
            <Delimiter text="OR"/>
            <Formik
                initialValues={initialValues}
                validationSchema={loginPageValidationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting, isValid, errors, values}) => (
                    <Form>
                        <div className="input-container">
                            <EmailInput
                                isValid={isValid}
                                value={emailValue}
                                onChange={handleEmailChange}
                            />


                            {!errors.email && values.email && (
                                <PasswordInput
                                    isValid={isValid}
                                    value={passwordValue}
                                    onChange={handlePasswordChange}
                                    name="password"
                                />
                            )}
                        </div>
                        <Link
                            className="forgot-password"
                            to="/forgot-password"
                        >
                            Forgot Password
                        </Link>
                        <ActionButton
                            text="Log in to Qencode"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
            <p className="sign-up">
                Is your company new to Qencode?
                <Link className="sign-up-link" to="/sign-up"> Sign up</Link>
            </p>
        </div>
    );
}

export default Login;