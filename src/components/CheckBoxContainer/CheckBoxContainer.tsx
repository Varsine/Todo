import React from "react";

import CheckBoxWithText from "components/CheckBoxWithText/CheckBoxWithText";

import "./CheckBoxContainer.scss";

interface ICheckBoxContainerProps {
  name: string;
  text: string;
  onClick: () => void;
  selected: boolean;
  className?: string;
}

const CheckBoxContainer: React.FC<ICheckBoxContainerProps> = ({
  name,
  text,
  onClick,
  selected,
  className = "",
}) => {
  return (
    <div className={`app-check-box ${className}`}>
      <CheckBoxWithText onClick={onClick} name={name} children={text} selected={selected} />
    </div>
  )
}

export default CheckBoxContainer;