import React from "react"

import "./Button.scss"

interface IButtonProps {}

const Button: React.FC<IButtonProps> = () => {
  return (
    <div className="header-login">
      <button>Մուտք</button>
    </div>
  )
}

export default Button
