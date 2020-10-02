import React from 'react';

import "./HeaderCart.scss";

interface IHeaderCartProps {
  className?: string
};

const HeaderCart: React.FC<IHeaderCartProps> = ({className = "", children}) => {
  return <h1 className={`app-heading ${className}`}>{children}</h1>
}

export default HeaderCart