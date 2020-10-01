import React from "react"

import "./Header.scss"

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div className="app-header">Header</div>
  );
}

export default Header
