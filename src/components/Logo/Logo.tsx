import React from "react"

import "./Logo.scss"
import BoxyLogo from "./../../icons/BoxyLogo"

interface ILogoProps {}

const Logo: React.FC<ILogoProps> = () => {
  return (
    <div className="logo">
      <BoxyLogo />
    </div>
  )
}

export default Logo
