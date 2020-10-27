import React, { useState } from 'react';

import Image from 'components/Image/Image';
import loginPageImg from 'assets/loginPageImg.png';
import LoginSignUp from 'components/LoginSignUp/LoginSignUp';
import InputField from 'components/InputField/InputField';
import InputValidation from 'components/InputValidation/InputValidation';

import "./Auth.scss";

enum InputNames{
    email= "email",
    password= "password",
    name="name",
}

interface IAuthProps { };

const Auth: React.FC<IAuthProps> = () => {
    const [signUp, setSignUp] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        nameField: "",
        emailField: "",
        passwordField: "",
    });

    const inputChangeHandler = (val: string, name: InputNames) => {
        console.log(name, val)
        setState({
            ...state,
            [name]: val,
        })
    }

    const loginHandler = () => { }
    const { name, email, password, nameField, emailField, passwordField } = state

    const validate = () => {
        const emptyText = "Դաշտը դատարկ է:"
        if (name === "") {
            setState({
                ...state,
                nameField: emptyText,
            })
        } else {
            setState({
                ...state,
                nameField: "",
            })
        }

        // if (email === "") {
        //     setState({
        //         ...state,
        //         emailField: emptyText,
        //     })
        // } else {
        //     setState({
        //         ...state,
        //         emailField: "",
        //     })
        // }
    }

    const signUpHandler = () => {
        validate()
    }

    const clickSignUp = () => {
        setSignUp(!signUp)
    }


    return (
        <div className="app-auth">
            <div className="app-auth__img">
                <Image src={loginPageImg} />
            </div>
            {!signUp ?
                (
                    <LoginSignUp header="Մուտք"
                        buttonClick={loginHandler}
                        signUpText="Գրանցվել"
                        onClick={clickSignUp}
                        forgetText="Մոռացե՞լ ես գաղտնաբառը"
                    >
                        <InputField
                            name="email"
                            value={name}
                            className="app-auth__input"
                            onChange={(val) => inputChangeHandler(val, InputNames.email)}
                            placeholder="Էլ․հասցե"
                            type="text"
                        />
                        <InputField
                            name="password"
                            value={password}
                            className="app-auth__input"
                            onChange={(val) => inputChangeHandler(val, InputNames.password)}
                            placeholder="Գաղտնաբառ"
                            type="password"
                        />
                    </LoginSignUp>
                ) :
                (
                    <LoginSignUp header="Գրանցում"
                        buttonClick={signUpHandler}
                        signUpQuestion="Արդեն գրանցվա՞ծ եք։"
                        loginText="Մուտք գործել"
                        onClick={clickSignUp}
                    >
                        <InputField
                            name='name'
                            value={name}
                            className="app-auth__input"
                            onChange={(val) => inputChangeHandler(val, InputNames.name)}
                            placeholder="Անուն"
                            type="text"
                        />
                        <InputValidation invalidText={nameField} />
                        <InputField
                            name='email'
                            value={email}
                            className="app-auth__input"
                            onChange={(val) => inputChangeHandler(val, InputNames.email)}
                            placeholder="Էլ․հասցե"
                            type="text"
                        />
                        <InputValidation invalidText={emailField} />
                        <InputField
                            name='password'
                            value={password}
                            className="app-auth__input"
                            onChange={(val) => inputChangeHandler(val, InputNames.password)}
                            placeholder="Գաղտնաբառ"
                            type="password"
                        />
                        <InputValidation invalidText={passwordField} />
                    </LoginSignUp>
                )
            }
        </div>
    );
}

export default Auth;