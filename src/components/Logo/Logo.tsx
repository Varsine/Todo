import React from "react"

import BoxyLogo from "icons/BoxyLogo"

import "./Logo.scss"

interface ILogoProps {}

const Logo: React.FC<ILogoProps> = () => {
  return (
    <div className="app-logo">
      <BoxyLogo />
    </div>
  )
}

export default Logo
