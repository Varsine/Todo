import React from "react";

import "./LandingAbout.scss";

interface ILandingAboutProps {
  className?: string
}

const LandingAbout: React.FC<ILandingAboutProps> = ({
  className = "",
  children,
}) => {
  return (<p className={`landing-about ${className}`}>{children}</p>)
}

export default LandingAbout
