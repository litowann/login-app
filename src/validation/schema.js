import * as Yup from "yup";

export const loginPageValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('The email should be a valid email format.')
        .required('Email is required'),
    password: Yup
        .string()
        .required('Password is required')
        .min(8, 'The password fields should be at least 8 characters long'),
});

export const forgotPasswordPageValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('The email should be a valid email format.')
        .required('Email is required')
});

export const resetPasswordPageValidationSchema = Yup.object().shape({
    password: Yup
        .string()
        .required('Password is required')
        .min(8, 'The password fields should be at least 8 characters long'),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password')], 'Passwords must match'),
});