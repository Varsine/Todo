import React from "react";

import InputField from 'components/InputField/InputField';

import "./InputFieldWithText.scss";

type InputType = 'text' | 'email' | 'number';

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
    text,
    value,
    onChange,
    Icon,
    placeholder,
    type,
    className = '',
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