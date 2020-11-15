import React from 'react';

import LoginSignUpTemplate from 'containers/Auth/LoginSignUpTemplate/LoginSignUpTemplate';
import InputField from 'components/InputField/InputField';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

interface ISignUpProps {
    onSignup: () => void;
    onAuthChangeClick: () => void;
    skipHandler: () => void;
    name: string;
    email: string;
    password: string;
    onChangeName: (value: string) => void;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    nameErrorMessage: string;
    emailErrorMessage: string;
    passwordErrorMessage: string;
    loading: boolean;
};

const SignUp: React.FC<ISignUpProps> = ({
    onSignup,
    onAuthChangeClick,
    skipHandler,
    name,
    email,
    password,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    nameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    loading,
}) => {
    return (
        <LoginSignUpTemplate
            header="Գրանցում"
            signUpQuestion="Արդեն գրանցվա՞ծ եք։"
            loginText="Մուտք գործել"
            buttonClick={onSignup}
            onClick={onAuthChangeClick}
            skipHandler={skipHandler}
            loading={loading}
        >
            <InputField
                name='name'
                value={name}
                className="app-auth__input"
                onChange={onChangeName}
                placeholder="Անուն"
                type="text"
                loading={loading}
                onEnterPressed={onSignup}
            />
            <ErrorMessage>{nameErrorMessage}</ErrorMessage>
            <InputField
                name='email'
                value={email}
                className="app-auth__input"
                onChange={onChangeEmail}
                placeholder="Էլ․հասցե"
                type="text"
                loading={loading}
                onEnterPressed={onSignup}
            />
            <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            <InputField
                name='password'
                value={password}
                className="app-auth__input"
                onChange={onChangePassword}
                placeholder="Գաղտնաբառ"
                type="password"
                loading={loading}
                onEnterPressed={onSignup}
            />
            <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
        </LoginSignUpTemplate>
    );
}

export default SignUp;