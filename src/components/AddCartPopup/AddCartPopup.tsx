import React from 'react';

import Popup from 'components/Popup/Popup';
import TextBlock from 'components/TextBlock/TextBlock';
import Button from 'components/Button/Button';
import Image from 'components/Image/Image';
import productImg from 'assets/productImgSrc.png';
import priceToStringConverter from "utils/priceToStringConverter";

import "./AddCartPopup.scss";

interface IAddCartPopupProps {
    onClose: () => void;
    onClick: () => void;
    productName: string;
    price: number;
};

const AddCartPopup: React.FC<IAddCartPopupProps> = ({
    onClick,
    onClose,
    productName,
    price,
}) => {
    const priceString = `${priceToStringConverter(price)} Դ`;
    return (
        <Popup className="add-cart-popup"
            title="Ցանկանում ե՞ք ավելացնել զամբյուղի մեջ"
            onClose={onClose}
            closeIcon={true}
        >
            <Image className="add-cart-popup__img" src={productImg} />
            <div className="add-cart-popup__product-data">
                <TextBlock className="add-cart-popup__product-data__name">{productName}</TextBlock>
                <div className="add-cart-popup__product-data__price">{priceString}</div>
            </div>
            <Button className="add-cart-popup__button" onClick={onClick}>Ավելացնել</Button>
        </Popup>
    );
}

export default AddCartPopup;