import React from "react";

import "./CheckBoxWithText.scss";

interface ICheckBoxWithTextProps {
  name: string;
  onClick: () => void;
  selected: boolean;
  className?: string;
}

const CheckBoxWithText: React.FC<ICheckBoxWithTextProps> = ({
  name,
  onClick,
  selected,
  className = "",
  children,
}) => {
  return (
    <label className={`app-label ${className}`} onClick={onClick}>
      <input className={`app-label__input-radio ${selected ? 'app-label__input-radio--selected' : ''}`} type="radio" name={name} />
      {children}
    </label>
  )
}

export default CheckBoxWithText;