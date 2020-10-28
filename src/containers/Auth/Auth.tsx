import React, { useState, useEffect } from 'react';

import Image from 'components/Image/Image';
import authImg from 'assets/AuthImage.svg';
import Login from "components/Login/Login";
import SignUp from 'components/SignUp/SignUp';

import "./Auth.scss";

enum InputNames {
    email = "email",
    password = "password",
    name = "name",
}

interface IAuthProps { };

const Auth: React.FC<IAuthProps> = () => {
    const [authState, setAuthState] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        nameField: "",
        emailField: "",
        passwordField: "",
    });

    const inputChangeHandler = (val: string, name: InputNames) => {
        setState({
            ...state,
            [name]: val,
        })
    }

    const { name, email, password, nameField, emailField, passwordField } = state
    const emptyText = "Դաշտը դատարկ է:"
    const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g

    const validateName = () => {
        if (name === "") {
            setState({
                ...state,
                nameField: emptyText,
            })
        } else if (name.length < 3) {
            setState({
                ...state,
                nameField: "Տառերի քանակը չի կարեղ լինել 3 պակաս:",
            })
        } else {
            setState({
                ...state,
                nameField: "",
            })
        }
    }
    const validateEmail = () => {
        if (email === "") {
            setState({
                ...state,
                emailField: emptyText,
            })
        } else if (!email.match(regExEmail)) {
            setState({
                ...state,
                emailField: "Էլ․հասցեն պետք է պարունակի տեքստ @ կետ, օր` boxy@gmail.com",
            })
        } else {
            setState({
                ...state,
                emailField: "",
            })
        }
    }

    const validatePassword = () => {
        if (password === "") {
            setState({
                ...state,
                passwordField: emptyText,
            })
        } else if (!password.match(regExPassword)) {
            setState({
                ...state,
                passwordField: "Գախտնաբառը պետք է ներառի մեծատառ, փոքրատառ, թիվ, սիմվոլ և քանակը լինի 8-ից ոչ պակաս",
            })
        } else {
            setState({
                ...state,
                passwordField: "",
            })
        }
    }

    const signUpHandler = () => {
        validatePassword();
        validateEmail();
        validateName();
    }
    const loginHandler = () => {
        validateEmail();
        validatePassword();
    }
    const changeAuth = () => {
        setAuthState(!authState);
        setState({
            ...state,
            email: "",
            password: "",
            nameField: "",
            emailField: "",
            passwordField: "",
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
                    emailErrorMessage={emailField}
                    passwordErrorMessage={passwordField}

                />) :
                (<SignUp buttonClick={signUpHandler}
                    changeAuth={changeAuth}
                    name={name}
                    email={email}
                    password={password}
                    onChangeName={(val) => inputChangeHandler(val, InputNames.name)}
                    onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
                    onChangePassword={(val) => inputChangeHandler(val, InputNames.password)}
                    emailErrorMessage={emailField}
                    passwordErrorMessage={passwordField}
                    nameErrorMessage={nameField}
                />)
            }
        </div>
    );
}

export default Auth;