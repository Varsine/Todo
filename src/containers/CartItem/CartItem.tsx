import React from "react";

import Image from "components/Image/Image";
import productImg from "assets/productImgSrc.png";
import TextBlock from "components/TextBlock/TextBlock";
import CloseIcon from "icons/CloseIcon";
import Button from "components/Button/Button";
import priceToStringConverter from "utils/priceToStringConverter";

import "./CartItem.scss";

interface ICartItemProps {
  productName: string,
  count: number,
  price: number,
  clickPlus: () => void,
  clickMinus: () => void,
}

const CartItem: React.FC<ICartItemProps> = ({
  productName,
  count,
  price,
  clickPlus,
  clickMinus,
}) => {

  return (
    <div className="cart-item">
      <div className="cart-item__left-column">
        <Image className="cart-item__left-column__img" src={productImg} />
      </div>
      <div className="cart-item__right-column">
        <div className="cart-item__right-column__product-name">
          <TextBlock className="cart-item__right-column__product-name__text">Նվեր տուփ - {productName}</TextBlock>
          <div className="cart-item__right-column__product-name__close-icon">
            <CloseIcon />
          </div>
        </div>
        <div className="cart-item__right-column__count">
          <Button
            className="cart-item__right-column__count__button"
            onClick={clickMinus}
          >
            -
          </Button>
          <div className="cart-item__right-column__count__number">{count}</div>
          <Button
            className="cart-item__right-column__count__button"
            onClick={clickPlus}
          >
            +
          </Button>
        </div>
        <div className="cart-item__right-column__price">
         {`${priceToStringConverter(price * count)} Դ`}
        </div>
      </div>
    </div>
  )
}

export default CartItem;