import React from "react";

import "./CheckoutProductCard.scss";

interface ICheckoutProductCardProps {
  src: string
  alt: string
  className?: string
  productClick: () => void
}

const CheckoutProductCard: React.FC<ICheckoutProductCardProps> = ({
  src,
  alt,
  productClick,
  className = "",
}) => {
  return (
    <img
      onClick={productClick}
      className={`checkout-product ${className}`}
      src={src}
      alt=""
    />
  )
}

export default CheckoutProductCard
