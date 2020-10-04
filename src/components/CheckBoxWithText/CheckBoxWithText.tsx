import React from "react";

import "./CheckBoxWithText.scss";

interface ICheckBoxWithTextProps {
  className?: string
  productType: string
}

const CheckBoxWithText: React.FC<ICheckBoxWithTextProps> = ({
  className = "",
  productType,
  children,
}) => {
  return (
    <p className={`product-text ${className}`}>
      {children}
      <span>{productType}</span>
    </p>
  )
}

export default CheckBoxWithText
