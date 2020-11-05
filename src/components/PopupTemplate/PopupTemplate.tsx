import React from 'react';

import TextBlock from 'components/TextBlock/TextBlock';
import Button from 'components/Button/Button';
import Image from 'components/Image/Image';
import CloseIcon from 'icons/CloseIcon';

import "./PopupTemplate.scss";

interface IPopupTemplateProps {
    header: string;
    cartPopup: boolean;
    src: string;
    onClick: () => void;
    buttonText: string;
    productName?: string;
    price?: string;
};

const PopupTemplate: React.FC<IPopupTemplateProps> = ({
    header,
    cartPopup,
    src,
    onClick,
    buttonText,
    productName,
    price,
}) => {
    return (
        <div className="app-popup">
            <div className="app-popup__basis"></div>
            <div className="app-popup__inner">
                <div className="app-popup__inner__close-icon"><CloseIcon /></div>
                <div className="app-popup__inner__content">
                    <TextBlock className="app-popup__inner__content__header">{header}</TextBlock>
                    <div className="app-popup__inner__content__img">
                        <Image src={src} />
                    </div>
                    <div className="app-popup__inner__content__select-div">
                        {
                            cartPopup ? (<div className="app-popup__inner__content__select-div__product-data">
                                <TextBlock className="app-popup__inner__content__select-div__product-data__name">{productName}</TextBlock>
                                <div className="app-popup__inner__content__select-div__product-data__price">{price}</div>
                            </div>)
                                : (<textarea className="app-popup__inner__content__select-div__offer" placeholder="Գրիր առաջարկդ այստեղ"></textarea>)
                        }
                    </div>
                    <Button className="app-popup__inner__content__button" onClick={onClick}>{buttonText}</Button>
                </div>
            </div>
        </div>
    );
}

export default PopupTemplate;