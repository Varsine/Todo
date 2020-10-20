import React from "react";
import { Link as RouterLink } from "@reach/router";

import "./Link.scss";

interface ILinkProps {
  to: string;
  out?: boolean;
  className?: string;
}

const Link: React.FC<ILinkProps> = ({
  to,
  out = false,
  className = "",
  children,
}) => {
  return (
    <React.Fragment>
      {!out ? (
        <RouterLink to={to} className={`app-link ${className}`}>
          {children}
        </RouterLink>
      ) : (
          <a href={to} className={`app-link ${className}`} target="blank">
            {children}
          </a>
        )
      }
    </React.Fragment>
  )
}
export default Link
