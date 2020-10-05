import React from "react";

import "./ProductImage.scss";

interface IProductImageProps {
  src: string
  alt?: string
  className?: string
  onClick: () => void
}

const ProductImage: React.FC<IProductImageProps> = ({
  src,
  alt = "",
  onClick,
  className = "",
}) => {
  return (
    <img
      onClick={onClick}
      className={`product-img ${className}`}
      src={src}
    />
  )
}

export default ProductImage
