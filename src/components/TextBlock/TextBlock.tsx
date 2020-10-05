import React from "react";

import "./TextBlock.scss";

interface ITextBlockProps {
  className?: string
}

const TextBlock: React.FC<ITextBlockProps> = ({className = "", children}) => {
  return (<h3 className={`app-text-block ${className}`}>{children}</h3>)
}

export default TextBlock;
