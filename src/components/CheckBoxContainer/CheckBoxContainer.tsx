import React from "react";

import CheckBoxWithText from "components/CheckBoxWithText/CheckBoxWithText";

import "./CheckBoxContainer.scss";

interface ICheckBoxContainerProps {
  name: string
  text: string
  className?: string
  onClick: () => void
}

const CheckBoxContainer: React.FC<ICheckBoxContainerProps> = ({
  name,
  text,
  className,
  onClick,
}) => {
  return (
    <div className={`app-check-box ${className}`}>
      <CheckBoxWithText onClick={onClick} name={name} children={text} />
    </div>
  )
}

export default CheckBoxContainer;