import React from 'react';

import LoginSignUpTemplate from 'components/LoginSignUpTemplate/LoginSignUpTemplate';
import InputField from 'components/InputField/InputField';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import "./SignUp.scss";

interface ISignUpProps {
    buttonClick: () => void;
    onAuthChangeClick: () => void;
    name: string;
    email: string;
    password: string;
    onChangeName: (value: string) => void;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    nameErrorMessage: string;
    emailErrorMessage: string;
    passwordErrorMessage: string;
    to: string;
};

const SignUp: React.FC<ISignUpProps> = ({
    buttonClick,
    onAuthChangeClick,
    name,
    email,
    password,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    nameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    to
}) => {
    return (
        <LoginSignUpTemplate
            header="Գրանցում"
            signUpQuestion="Արդեն գրանցվա՞ծ եք։"
            loginText="Մուտք գործել"
            buttonClick={buttonClick}
            onClick={onAuthChangeClick}
            to={to}
        >
            <InputField
                name='name'
                value={name}
                className="app-auth__input"
                onChange={onChangeName}
                placeholder="Անուն"
                type="text"
            />
            <ErrorMessage>{nameErrorMessage}</ErrorMessage>
            <InputField
                name='email'
                value={email}
                className="app-auth__input"
                onChange={onChangeEmail}
                placeholder="Էլ․հասցե"
                type="text"
            />
            <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            <InputField
                name='password'
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

export default SignUp;