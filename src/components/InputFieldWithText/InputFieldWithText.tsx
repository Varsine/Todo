import React from "react";

import InputField from 'components/InputField/InputField';

import "./InputFieldWithText.scss";

enum InputTypes {
    text = 'text',
    email = 'email',
    tel = 'tel'
}

type InputType = 'text' | 'email' | 'tel';

interface IInputFieldWithTextProps {
    text: string;
    value: string;
    onChange: (value: string) => void;
    Icon: React.FC;
    placeholder: string;
    type: InputType;
    className?: string;
};

const InputFieldWithText: React.FC<IInputFieldWithTextProps> = ({
    className,
    text,
    value,
    onChange,
    Icon,
    placeholder,
    type,
}) => {
    return (
        <div className={`container ${className}`}>
            <label className="container__text">{text}</label>
            <InputField
                className="container__input"
                value={value}
                onChange={onChange}
                Icon={Icon}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}

export default InputFieldWithText;