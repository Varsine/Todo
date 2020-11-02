import React, { useState } from 'react';

import Image from 'components/Image/Image';
import authImg from 'assets/AuthImage.svg';
import Login from "components/Login/Login";
import SignUp from 'components/SignUp/SignUp';
import { inputValidation, InputNames } from 'utils/inputValidation';

import "./Auth.scss";

const Auth: React.FC = () => {
    const [authState, setAuthState] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: "",
    });

    const inputChangeHandler = (val: string, name: InputNames) => {
        setState({
            ...state,
            [name]: val,
        })
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
        setState({
            ...state,
            emailError: inputValidation(email, InputNames.email).errorText,
            passwordError: inputValidation(password, InputNames.password).errorText,
        })
    }

    const onAuthChangeClick = () => {
        setAuthState(!authState);
        setState({
            ...state,
            email: "",
            password: "",
            nameError: "",
            emailError: "",
            passwordError: "",
        })
    }

    return (
        <div className="app-auth" >
            <div className="app-auth__background"></div>
            <div className="app-auth__img">
                <Image src={authImg} />
            </div>
            {!authState ?
                (<Login onClick={loginHandler}
                    onAuthChangeClick={onAuthChangeClick}
                    email={email}
                    password={password}
                    onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
                    onChangePassword={(val) => inputChangeHandler(val, InputNames.password)}
                    emailErrorMessage={emailError}
                    passwordErrorMessage={passwordError}

                />) :
                (<SignUp buttonClick={signUpHandler}
                    onAuthChangeClick={onAuthChangeClick}
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