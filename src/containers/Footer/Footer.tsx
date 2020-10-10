import React from "react";

import FooterContacts from "components/FooterContacts/FooterContacts";
import FooterServices from "components/FooterServices/FooterServices";
import SocialMedia from "components/FooterSocialMedia/FooterSocialMedia";
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
          <p className="app-footer__top-column__left-column__text-content">THINK OUT OF THE BOXY</p>
        </div>
        <Button
          className="app-footer__top-column__button"
          onClick={buttonClick}
        >
          Առաջարկ ունե՞ս
        </Button>
      </div>
      <div className="app-footer__bottom-column">
        <FooterContacts />
        <FooterServices />
        <SocialMedia />
      </div>
      <p className="app-footer__copy">
        © <span>{new Date().getFullYear()}</span> Boxy: Բոլոր իրավունքները
        պաշտպանված են։
      </p>
    </div>
  )
}

export default Footer;
