import React from "react";

import Contact from "components/Contact/Contact";
import Services from "components/Services/Services";
import SocialMedia from "components/SocialMedia/SocialMedia";
import FooterBoxyLogo from "icons/FooterBoxyLogo";
import Button from "components/Button/Button";

import "./Footer.scss";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  const buttonClick = () => {}
  return (
    <div className="app-footer">
      <div className="app-footer__top-column">
        <div className="app-footer__top-column__left-column">
          <FooterBoxyLogo />
          <p>THINK OUT OF THE BOXY</p>
        </div>
        <Button
          className="app-footer__top-column__button"
          onClick={buttonClick}
        >
          Առաջարկ ունե՞ս
        </Button>
      </div>
      <div className="app-footer__bottom-column">
        <Contact />
        <Services />
        <SocialMedia />
      </div>
      <p className="app-footer__copy">
        © <span>{new Date().getFullYear()}</span> Boxy: Բոլոր իրավունքները
        պաշտպանված են։
      </p>
    </div>
  )
}

export default Footer
