import React from "react";

import InputField from 'components/InputField/InputField';

import "./InputFieldWithText.scss";

type InputType = 'text' | 'email' | 'password' | 'tel';

interface IInputFieldWithTextProps {
    text: string;
    value: string;
    onChange: (value: string) => void;
    Icon: React.FC;
    type: InputType;
    placeholder?: string;
    className?: string;
};

const InputFieldWithText: React.FC<IInputFieldWithTextProps> = ({
    text,
    value,
    onChange,
    Icon,
    type,
    placeholder = '',
    className = '',
}) => {
    return (
        <div className={`input-field-with-text-container ${className}`}>
            <label className="input-field-with-text-container__text">{text}</label>
            <InputField
                className="input-field-with-text-container__input"
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