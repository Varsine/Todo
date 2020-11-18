import React from "react";

import Popup from 'components/Popup/Popup';
import Button from 'components/Button/Button';
import Image from 'components/Image/Image';
import TextareaField from "components/TextareaField/TextareaField";
import suggestionLump from 'assets/suggestionLump.png';

import "./SuggestionPopup.scss";

interface ISuggestionPopupProps {
  onClose: () => void;
  onClick: () => void;
}

const SuggestionPopup: React.FC<ISuggestionPopupProps> = ({
  onClick,
  onClose,
}) => {
  return (
    <Popup className="suggestion-popup"
      title="Boxy-ին սպասում է քո նոր և հետաքրքիր գաղափարներին"
      onClose={onClose}
    >
      <Image className="suggestion-popup__img" src={suggestionLump} />
      <TextareaField className="suggestion-popup__textarea" placeholder="Գրիր առաջարկդ այստեղ" />
      <Button className="suggestion-popup__button" onClick={onClick}>Ուղարկել</Button>
    </Popup>
  )
};

export default SuggestionPopup;