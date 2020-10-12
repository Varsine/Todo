import React, {useState} from "react";

import Image from "components/Image/Image";
import productImg from "assets/productImgSrc.png";
import TextBlock from "components/TextBlock/TextBlock";
import CloseIcon from "icons/CloseIcon";
import Button from "components/Button/Button";
import priceToStringConverter from "utils/priceToStringConverter";

import "./CartItem.scss";

interface ICartItemProps {
  productName: string
  price: number
}

const CartItem: React.FC<ICartItemProps> = ({productName, price}) => {
  const [count, setCount] = useState(1)

  const incrementItem = () => {
    setCount(count + 1)
  }
  const decreaseItem = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item__left-column">
        <Image className="cart-item__left-column__img" src={productImg} />
      </div>
      <div className="cart-item__right-column">
        <div className="cart-item__right-column__product-name">
          <TextBlock>Նվեր տուփ - {productName}</TextBlock>
          <div className="cart-item__right-column__product-name__close-icon">
            <CloseIcon />
          </div>
        </div>
        <div className="cart-item__right-column__count">
          <Button
            className="cart-item__right-column__count__button"
            onClick={decreaseItem}
          >
            -
          </Button>
          <div className="cart-item__right-column__count__number">{count}</div>
          <Button
            className="cart-item__right-column__count__button"
            onClick={incrementItem}
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