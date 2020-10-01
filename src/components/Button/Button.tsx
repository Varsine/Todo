import React from "react"

import "./Button.scss"

interface IButtonProps {
  text: string
}

const Button: React.FC<IButtonProps> = ({text}) => {
  return <button className="app-button">{text}</button>
}

export default Button
