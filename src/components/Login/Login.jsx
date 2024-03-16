import {useState} from "react";
import {Formik, Form} from "formik";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginPageValidationSchema} from "../../validation/schema";
import {
    ActionButton,
    Delimiter,
    EmailInput,
    PasswordInput,
    ThirdPartyButton
} from "../../shared";
import {GoogleIcon, GithubIcon} from "../../assets/svg";
import {ROUTES} from "../../helpers/constants";
import {loginRequest} from "../../actions/loginActions";

import "./Login.scss";

const Login = () => {
    const [isEmailFieldBlurred, setIsEmailFieldBlurred] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: ""
    };

    const handleSubmit = (values, {setSubmitting}) => {
        dispatch(loginRequest(email, password));
        setSubmitting(false);
    };

    const handleEmailBlur = () => setIsEmailFieldBlurred(true);

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
                {({isSubmitting, errors, isValid, values, handleBlur, handleChange}) => (
                    <Form>
                        <div className="input-container">
                            <EmailInput
                                isValid={!errors.email}
                                onBlur={(e) => {
                                    handleBlur(e);
                                    handleEmailBlur();
                                }}
                                onChange={(e) => {
                                    handleChange(e)
                                    setEmail(e.target.value)
                                }}
                                value={email}
                                errors={errors}
                            />
                            {values.email && isEmailFieldBlurred && (
                                <PasswordInput
                                    isValid={isValid}
                                    name="password"
                                    onChange={(e) => {
                                        handleChange(e)
                                        setPassword(e.target.value)
                                    }}
                                    value={password}
                                />
                            )}
                        </div>
                        <Link
                            className="forgot-password"
                            to={ROUTES.FORGOT_PASSWORD}
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