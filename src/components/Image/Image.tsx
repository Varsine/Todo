import React from "react"

import "./Image.scss"

interface IImageProps {
  src: string
  alt?: string
  className?: string
  onClick?: () => void
}

const Image: React.FC<IImageProps> = ({
  src,
  alt = "",
  onClick,
  className = "",
}) => {
  return (
    <img
      onClick={onClick}
      className={`app-img ${className}`}
      alt={alt}
      src={src}
    />
  )
}

export default Image
