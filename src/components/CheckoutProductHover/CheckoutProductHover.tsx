import React from "react";

import Button from "components/Button/Button";
import CartIcon from "icons/CartIcon";

import "./CheckoutProductHover.scss";

interface ICheckoutProductHoverProps {
  className?: string
  cost: string
  buttonClick: () => void
}

const CheckoutProductHover: React.FC<ICheckoutProductHoverProps> = ({
  cost,
  className = "",
  buttonClick,
  children,
}) => {
  return (
    <div className="product-hover">
      <div className="product-hover__basis"></div>
      <div className="product-hover__external-column">
        <p className={`product-hover__external-column__cost ${className}`}>
          {cost}
        </p>
        <Button
          className="product-hover__external-column__button"
          onClick={buttonClick}
        >
          {children}
          <CartIcon />
        </Button>
      </div>
    </div>
  )
}

export default CheckoutProductHover
