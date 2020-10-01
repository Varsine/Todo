import React from "react";

import "./Button.scss";

interface IButtonProps {
  className?: string
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({className = ""}) => {
  return (<button className={`app-button ${className}`}></button>)
}
export default Button
