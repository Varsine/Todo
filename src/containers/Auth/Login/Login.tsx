import React from 'react';

import LoginSignUpTemplate from 'containers/Auth/LoginSignUpTemplate/LoginSignUpTemplate';
import InputField from 'components/InputField/InputField';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import "./Login.scss";

interface ILoginProps {
    onLogin: () => void;
    onAuthChangeClick: () => void;
    skipHandler: () => void;
    email: string;
    password: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    emailErrorMessage: string;
    passwordErrorMessage: string;
};

const Login: React.FC<ILoginProps> = ({
    onLogin,
    onAuthChangeClick,
    skipHandler,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    emailErrorMessage,
    passwordErrorMessage,
}) => {
    return (
        <LoginSignUpTemplate
            header="Մուտք"
            registerText="Գրանցվել"
            forgetText="Մոռացե՞լ ես գաղտնաբառը"
            buttonClick={onLogin}
            onClick={onAuthChangeClick}
            skipHandler={skipHandler}
        >
            <InputField
                name="email"
                value={email}
                className="app-auth__input"
                onChange={onChangeEmail}
                placeholder="Էլ․հասցե"
                type="text"
            />
            <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            <InputField
                name="password"
                value={password}
                className="app-auth__input"
                onChange={onChangePassword}
                placeholder="Գաղտնաբառ"
                type="password"
            />
            <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
        </LoginSignUpTemplate>
    );
}

export default Login;