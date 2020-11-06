import React from "react";

import "./Button.scss";

interface IButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  disabled = false,
  className = "",
  onClick,
  loading = false,
  children
}) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={`app-button ${className}`}
    >
      {!loading ? children : 'Loading...'}
    </button>
  )
}
export default Button
