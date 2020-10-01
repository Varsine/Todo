import React from "react";
import {Link as RouterLink} from "@reach/router";

import "./Link.scss";

interface ILinkProps {
  to: string
  className?: string
}

const Link: React.FC<ILinkProps> = ({to, className = "", children}) => {
  return (
    <RouterLink to={to} className={`app-link ${className}`}>
      {children}
    </RouterLink>
  )
}
export default Link
