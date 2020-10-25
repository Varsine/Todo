import React from "react";
import { Link as RouterLink } from "@reach/router";

import "./Link.scss";

interface ILinkProps {
  to: string;
  out?: boolean;
  className?: string;
  blank?: boolean;
}

const Link: React.FC<ILinkProps> = ({
  to,
  out = false,
  className = "",
  blank = true,
  children,
}) => {
  return (
    <React.Fragment>
      {!out ? (
        <RouterLink to={to} className={`app-link ${className}`}>
          {children}
        </RouterLink>
      ) : (
          <a href={to} className={`app-link ${className}`} target={blank ? 'blank' : ''}>
            {children}
          </a>
        )
      }
    </React.Fragment>
  )
}
export default Link
