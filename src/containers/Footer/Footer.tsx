import React, { useState } from "react";
import { toast } from "react-toastify";

import SuggestionPopup from "components/SuggestionPopup/SuggestionPopup";
import Button from "components/Button/Button";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterServices from "./FooterServices/FooterServices";
import SocialMedia from "./FooterSocialMedia/FooterSocialMedia";
import FooterBoxyLogo from "icons/FooterBoxyLogo";

import "./Footer.scss";

interface IFooterProps { }

const Footer: React.FC<IFooterProps> = () => {
  const [showSuggestionPopup, setShowSuggestionPopup] = useState(false);
  const [suggestionText, setSuggestionText] = useState('');

  const toggleSuggestionPopup = () => {
    setShowSuggestionPopup(!showSuggestionPopup)
  }

  const sendSuggestion = () => { 
    // TODO handle suggestion request
    toast.success('Շնորհակալություն․')
    toggleSuggestionPopup();
  }

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
          textValue={suggestionText}
          onTextChange={(val) => { setSuggestionText(val) }}
        />
      )}
    </div>
  )
}

export default Footer;