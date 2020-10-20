import React from "react";

import "./CheckBoxWithText.scss";

interface ICheckBoxWithTextProps {
  name: string
  className?: string
  onClick: () => void
}

const CheckBoxWithText: React.FC<ICheckBoxWithTextProps> = ({
  children,
  name,
  className="",
  onClick
}) => {
  return (
    <label className={`app-label ${className}`} onClick={onClick}>
      <input className="app-label__input-radio"  type="radio" name={name} />
      {children}
    </label>
  )
}

export default CheckBoxWithText;