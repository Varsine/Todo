import React, { useState } from 'react';

import { navigate } from "@reach/router";
import Image from 'components/Image/Image';
import authImg from 'assets/AuthImage.svg';
import Login from "containers/Auth/Login/Login";
import SignUp from 'containers/Auth/SignUp/SignUp';
import { inputValidation, InputNames } from 'utils/inputValidation';

import "./Auth.scss";

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
}

const Auth: React.FC = () => {
    const [authState, setAuthState] = useState(false)
    const [state, setState] = useState(initialState);

    const inputChangeHandler = (val: string, name: InputNames) => {
        setState({ ...state, [name]: val, })
    }

    const { name, email, password, nameError, emailError, passwordError } = state;

    const signUpHandler = () => {
        setState({
            ...state,
            nameError: inputValidation(name, InputNames.name).errorText,
            emailError: inputValidation(email, InputNames.email).errorText,
            passwordError: inputValidation(password, InputNames.password).errorText,
        })
    }

    const loginHandler = () => {
        const emailValid = inputValidation(email, InputNames.email);
        const passwordValid = inputValidation(password, InputNames.password);
        setState({
            ...state,
            emailError: emailValid.errorText,
            passwordError: passwordValid.errorText,
        })
        if (emailValid.isValid && passwordValid.isValid) {
            navigate("/order-details");
        }
    }

    const skipHandler = () => {
        navigate('/order-details');
    }

    const onAuthChangeClick = () => {
        setAuthState(!authState);
        setState(initialState);
    }

    return (
        <div className="app-auth" >
            <div className="app-auth__background"></div>
            <div className="app-auth__img">
                <Image src={authImg} />
            </div>
            {!authState ?
                (<Login
                    onLogin={loginHandler}
                    onAuthChangeClick={onAuthChangeClick}
                    skipHandler={skipHandler}
                    email={email}
                    password={password}
                    onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
                    onChangePassword={(val) => inputChangeHandler(val, InputNames.password)}
                    emailErrorMessage={emailError}
                    passwordErrorMessage={passwordError}
                />) :
                (<SignUp
                    onSignup={signUpHandler}
                    onAuthChangeClick={onAuthChangeClick}
                    skipHandler={skipHandler}
                    name={name}
                    email={email}
                    password={password}
                    onChangeName={(val) => inputChangeHandler(val, InputNames.name)}
                    onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
                    onChangePassword={(val) => inputChangeHandler(val, InputNames.password)}
                    emailErrorMessage={emailError}
                    passwordErrorMessage={passwordError}
                    nameErrorMessage={nameError}
                />)
            }
        </div>
    );
}

export default Auth;