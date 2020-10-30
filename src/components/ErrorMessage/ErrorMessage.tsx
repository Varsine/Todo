import React from 'react';

import "./ErrorMessage.scss";

interface IErrorMessageProps {
    className?: string;
};

const ErrorMessage: React.FC<IErrorMessageProps> = ({ className = "", children }) => {
    return (<p className={`error-message ${className}`}>{children}</p>);
}

export default ErrorMessage;