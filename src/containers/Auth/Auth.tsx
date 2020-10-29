import React, { useState, useEffect } from 'react';

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

    const changeAuth = () => {
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

    const [className, setClassName] = useState("")
    const mobileMenu = () => {
        if (window.innerWidth < 1024 && document.getElementById("mobile-menu")?.className.includes("mobile-menu")) {
            setClassName("mobile-auth")
        } else {
            setClassName("")
        }
    }

    useEffect(() => {
        document.addEventListener("click", mobileMenu)
    })
    return (
        <div className={`app-auth ${className} `} >
            <div className="app-auth__img">
                <Image src={authImg} />
            </div>
            {!authState ?
                (<Login buttonClick={loginHandler}
                    changeAuth={changeAuth}
                    email={email}
                    password={password}
                    onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
                    onChangePassword={(val) => inputChangeHandler(val, InputNames.password)}
                    emailErrorMessage={emailError}
                    passwordErrorMessage={passwordError}

                />) :
                (<SignUp buttonClick={signUpHandler}
                    changeAuth={changeAuth}
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