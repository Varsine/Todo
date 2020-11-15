import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { navigate } from "@reach/router";
import Image from 'components/Image/Image';
import authImg from 'assets/AuthImage.svg';
import Login from "containers/Auth/Login/Login";
import SignUp from 'containers/Auth/SignUp/SignUp';
import { inputValidation, InputNames } from 'utils/inputValidation';

import service from 'api/service';
import { AppContext } from 'app-context/appContext';
import { ActionTypes } from 'app-context/actionTypes';

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
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(AppContext);

    const inputChangeHandler = (val: string, name: InputNames) => {
        setState({ ...state, [name]: val, })
    }

    const { name, email, password, nameError, emailError, passwordError } = state;

    const signUpHandler = () => {
        const nameValid = inputValidation(name, InputNames.name);
        const emailValid = inputValidation(email, InputNames.email);
        const passwordValid = inputValidation(password, InputNames.password);
        setState({
            ...state,
            nameError: nameValid.errorText,
            emailError: emailValid.errorText,
            passwordError: passwordValid.errorText,
        })
        if (nameValid.isValid && emailValid.isValid && passwordValid.isValid) {
            setLoading(true);
            service.signup({ name: state.name, email: state.email, password: state.password })
                .then(user => {
                    console.log("user: ", user)
                    dispatch({ type: ActionTypes.SET_USER, payload: { user } })
                    navigate("/order-details");
                })
                .catch(err => {
                    setState({
                        ...state,
                        nameError: err && err.message ? err.message : 'Unknown Error',
                        emailError: '',
                        passwordError: '',
                    });
                })
                .finally(() => {
                    setLoading(false);
                })
        }
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
            setLoading(true);
            service.login({ email: state.email, password: state.password })
                .then(user => {
                    console.log("user: ", user)
                    dispatch({ type: ActionTypes.SET_USER, payload: { user } })
                    navigate("/order-details");
                })
                .catch(err => {
                    setState({
                        ...state,
                        emailError: err && err.message ? err.message : 'Unknown Error',
                        passwordError: ''
                    });
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }

    const skipHandler = () => {
        navigate('/order-details');
    }

    const googleLoginHandler = async () => {
        try {
            const user = await service.googleSignIn();
            if (user && user.id) {
                dispatch({ type: ActionTypes.SET_USER, payload: { user } });
                console.log("googleLoginUser: ", user)
                navigate("/order-details");
            }
        }
        catch (err) {
            toast.error('Network Error: ', err && err.message ? err.message : 'Unknown Error')
        }
    }

    const facebookLoginHandler = async () => {
        // try {
        //     const user = service.facebookLogin();
        //     if (user && user.id) {
        //         dispatch({ type: ActionTypes.SET_USER, payload: { user } });
        //         console.log("googleLoginUser: ", user)
        //         navigate("/order-details");
        //     }
        // }
        // catch (err) {
        //     toast.error('Network Error: ', err && err.message ? err.message : (err && typeof err === 'string') ? err : 'Unknown Error');
        // }
    }

    const onAuthChangeClick = () => {
        setAuthState(!authState);
        setState(initialState);
    }

    return (
        <div className="app-auth" >
            {/* <div className="app-auth__background"></div> */}
            <div className="app-auth__img">
                <Image src={authImg} />
            </div>
            {!authState ?
                (<Login
                    onLogin={loginHandler}
                    onAuthChangeClick={onAuthChangeClick}
                    skipHandler={skipHandler}
                    googleLogin={googleLoginHandler}
                    facebookLogin={facebookLoginHandler}
                    email={email}
                    password={password}
                    onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
                    onChangePassword={(val) => inputChangeHandler(val, InputNames.password)}
                    emailErrorMessage={emailError}
                    passwordErrorMessage={passwordError}
                    loading={loading}
                />) :
                (<SignUp
                    onSignup={signUpHandler}
                    onAuthChangeClick={onAuthChangeClick}
                    skipHandler={skipHandler}
                    googleLogin={googleLoginHandler}
                    facebookLogin={facebookLoginHandler}
                    name={name}
                    email={email}
                    password={password}
                    onChangeName={(val) => inputChangeHandler(val, InputNames.name)}
                    onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
                    onChangePassword={(val) => inputChangeHandler(val, InputNames.password)}
                    emailErrorMessage={emailError}
                    passwordErrorMessage={passwordError}
                    nameErrorMessage={nameError}
                    loading={loading}
                />)
            }
        </div>
    );
}

export default Auth;