import React, { useContext, useState } from "react";

import SuggestionPopup from "components/SuggestionPopup/SuggestionPopup";
import Button from "components/Button/Button";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterServices from "./FooterServices/FooterServices";
import SocialMedia from "./FooterSocialMedia/FooterSocialMedia";
import FooterBoxyLogo from "icons/FooterBoxyLogo";
import { AppContext } from "app-context/appContext";
import { ActionTypes } from 'app-context/actionTypes';

import "./Footer.scss";

interface IFooterProps { }

const Footer: React.FC<IFooterProps> = () => {
  const { state: { lockScroll }, dispatch } = useContext(AppContext);
  const [showSuggestionPopup, setShowSuggestionPopup] = useState(false)

  const toggleSuggestionPopup = () => {
    setShowSuggestionPopup(!showSuggestionPopup)
    dispatch({ type: ActionTypes.LOCK_SCROLL });
    !lockScroll ? document.body.classList.add('lock-scroll') : document.body.classList.remove('lock-scroll')
  }
  const sendSuggestion = () => { }
  return (
    <div className="app-footer">
      <div className="app-footer__top-column">
        <div className="app-footer__top-column__left-column">
          <FooterBoxyLogo />
          <p className="app-footer__top-column__left-column__text-content">THINK OUT OF THE BOXY</p>
        </div>
        <Button
          className="app-footer__top-column__button"
          onClick={toggleSuggestionPopup}
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
      {showSuggestionPopup && (
        <SuggestionPopup
          onClick={sendSuggestion}
          onClose={toggleSuggestionPopup}
        />
      )}
    </div>
  )
}

export default Footer;