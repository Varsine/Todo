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
  const { dispatch } = useContext(AppContext);
  const [showSuggestionPopup, setShowSuggestionPopup] = useState(false)

  const openSuggestionPopup = () => {
    setShowSuggestionPopup(!showSuggestionPopup)
    dispatch({ type: ActionTypes.ADD_LOCK_SCROLL })
  }
  const closeSuggestionPopup = () => {
    setShowSuggestionPopup(!showSuggestionPopup)
    dispatch({ type: ActionTypes.REMOVE_LOCK_SCROLL })
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
          onClick={openSuggestionPopup}
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
          onClose={closeSuggestionPopup}
        />
      )}
    </div>
  )
}

export default Footer;