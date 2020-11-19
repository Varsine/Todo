import React from 'react';

import "./TextareaField.scss";
interface ITextareaFieldProps {
    placeholder: string;
    onChange: (val: string) => void;
    value?: string;
    className?: string;
};

const TextareaField: React.FC<ITextareaFieldProps> = ({
    className = "",
    placeholder,
    value,
    onChange
}) => {
    return (
        <textarea
            className={`app-textarea ${className}`}
            value={value}
            onChange={(e) => { onChange(e.target.value) }}
            placeholder={placeholder}>
        </textarea>
    );
}

export default TextareaField;