import React from 'react';

import LoginSignUpTemplate from 'containers/Auth/LoginSignUpTemplate/LoginSignUpTemplate';
import InputField from 'components/InputField/InputField';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

interface ILoginProps {
    onLogin: () => void;
    onAuthChangeClick: () => void;
    skipHandler: () => void;
    googleLogin: () => void;
    facebookLogin: () => void;
    email: string;
    password: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    emailErrorMessage: string;
    passwordErrorMessage: string;
    loading: boolean;
};

const Login: React.FC<ILoginProps> = ({
    onLogin,
    onAuthChangeClick,
    skipHandler,
    googleLogin,
    facebookLogin,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    emailErrorMessage,
    passwordErrorMessage,
    loading,
}) => {
    return (
        <LoginSignUpTemplate
            header="Մուտք"
            registerText="Գրանցվել"
            forgetText="Մոռացե՞լ ես գաղտնաբառը"
            buttonClick={onLogin}
            onClick={onAuthChangeClick}
            skipHandler={skipHandler}
            googleLogin={googleLogin}
            facebookLogin={facebookLogin}
            loading={loading}
        >
            <InputField
                name="email"
                value={email}
                className="app-auth__input"
                onChange={onChangeEmail}
                placeholder="Էլ․հասցե"
                type="email"
                loading={loading}
                onEnterPressed={onLogin}
            />
            <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            <InputField
                name="password"
                value={password}
                className="app-auth__input"
                onChange={onChangePassword}
                placeholder="Գաղտնաբառ"
                type="password"
                loading={loading}
                onEnterPressed={onLogin}
            />
            <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
        </LoginSignUpTemplate>
    );
}

export default Login;