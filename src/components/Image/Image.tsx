import React from "react";

import "./Image.scss";

interface IImageProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  draggable?: boolean;
}

const Image: React.FC<IImageProps> = ({
  src,
  alt = "",
  onClick = () => {},
  className = "",
  draggable = false,
}) => {
  return (
    <img
      onClick={onClick}
      className={`app-img ${className}`}
      alt={alt}
      src={src}
      draggable={draggable}
    />
  )
}

export default Image;
