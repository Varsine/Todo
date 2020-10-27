import React from 'react';

import "./InputValidation.scss";

interface IInputValidationProps {
    invalidText: string;
};

const InputValidation: React.FC<IInputValidationProps> = ({ invalidText }) => {

    return (<p>{invalidText}</p>);
}

export default InputValidation;