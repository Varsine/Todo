import React from 'react';

import Popup from 'components/Popup/Popup';
import Image from 'components/Image/Image';
import Button from 'components/Button/Button';
import TextBlock from 'components/TextBlock/TextBlock';
import ThankYouPopupImg from "assets/ThankYouPopupImg.png";

import "./ThankYouPopup.scss";

interface IThankYouPopupProps {
    onClick: () => void;
};

const ThankYouPopup: React.FC<IThankYouPopupProps> = ({ onClick }) => {
    return (
        <Popup className="thank-you-popup"
            title="Ձեր պատվերն ընդունված է !"
            closeIcon={false}
        >
            <Image className="thank-you-popup__img" src={ThankYouPopupImg} />
            <TextBlock className="thank-you-popup__text-block">Շնորհակալություն</TextBlock>
            <Button className="thank-you-popup__button" onClick={onClick}>Լավ</Button>
        </Popup>
    );
}

export default ThankYouPopup;