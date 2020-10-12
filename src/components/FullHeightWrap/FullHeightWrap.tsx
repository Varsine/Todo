import React from "react";

import "./FullHeightWrap.scss";

interface IFullHeightWrapProps {
  className?: string
}

const FullHeightWrap: React.FC<IFullHeightWrapProps> = ({
  className = "",
  children,
}) => {
  return <div className={`full-height-wrap ${className}`}>{children}</div>
}

export default FullHeightWrap;
