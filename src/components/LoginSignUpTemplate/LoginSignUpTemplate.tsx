import React from 'react';

import Heading from 'components/Heading/Heading';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';
import TextBlock from 'components/TextBlock/TextBlock';
import GoogleIcon from 'icons/GoogleIcon';
import FbLoginIcon from 'icons/FbLoginIcon';

import "./LoginSignUpTemplate.scss";

interface ILoginSignUpTemplateProps {
    header: string;
    buttonClick: () => void;
    onClick: () => void;
    to: string;
    signUpQuestion?: string;
    loginText?: string;
    registerText?: string;
    forgetText?: string;
};

const LoginSignUpTemplate: React.FC<ILoginSignUpTemplateProps> = ({
    header,
    buttonClick,
    onClick,
    to,
    signUpQuestion,
    registerText,
    children,
    loginText,
    forgetText
}) => {
    return (
        <div className="login-sign-up">
            <Heading className="login-sign-up__header">{header}</Heading>
            <div className="login-sign-up__content">
                <div className="login-sign-up__content__sign-up-div">
                    <p className="login-sign-up__content__sign-up-div__text-one">{signUpQuestion}</p>
                    <p className="login-sign-up__content__sign-up-div__text-two" onClick={onClick}>{loginText}</p>
                </div>
                <div className="login-sign-up__content__input-div">{children}</div>
                <div className="login-sign-up__content__login-div">
                    <p className="login-sign-up__content__login-div__text-one" onClick={onClick} >{registerText}</p>
                    <p className="login-sign-up__content__login-div__text-two" >{forgetText}</p>
                </div>
            </div>
            <Link to={to} className="login-sign-up__button-div">
                <Button className="login-sign-up__button-div__btn" onClick={buttonClick}>{header}</Button>
            </Link>
            <TextBlock className="login-sign-up__text-block">Բաց թողնել</TextBlock>

            <div className="login-sign-up__social-media-div">
                <p className="login-sign-up__social-media-div__p-text">կամ մուտք գործել</p>
                <div className="login-sign-up__social-media-div__links-container">
                    <Link className="login-sign-up__social-media-div__links-container__link" to=""><FbLoginIcon /></Link>
                    <Link className="login-sign-up__social-media-div__links-container__link" to=""><GoogleIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUpTemplate;