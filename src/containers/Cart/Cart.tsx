import React, { useState } from "react";

import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button/Button";
import CartItem from "containers/CartItem/CartItem";
import CloseIcon from "icons/CloseIcon";
import priceToStringConverter from "utils/priceToStringConverter";
import { productData } from "data-mockup/product-data.mockup";

import "./Cart.scss";

interface ICartProps {
  closeCartMenu: () => void
}

const Cart: React.FC<ICartProps> = ({ closeCartMenu }) => {
  const [count, setCount] = useState(1);

  const incrementItem = () => {
    setCount(count + 1);
  }
  const decreaseItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const total = productData[0].price * count + productData[1].price * count
  const clickContinue = () => { }
  return (
    <div className="cart-menu">
      <div className="cart-menu__inner">
        <div className="cart-menu__inner__basket">
          <TextBlock className="cart-menu__inner__basket__text">
            Իմ զամբյուղը
          </TextBlock>
          <div
            onClick={closeCartMenu}
            className="cart-menu__inner__basket__close-icon"
          >
            <CloseIcon />
          </div>
        </div>
        <div className="cart-menu__inner__shopping">
          {productData.slice(0, 2).map((product) => {
            return (
              <CartItem
                count={count}
                price={product.price}
                clickDecreaset={decreaseItem}
                clickIncrement={incrementItem}
                productName={product.name}
              />
            )
          })}
        </div>
        <div className="cart-menu__inner__total">
          <TextBlock>Ընդամենը</TextBlock>
          <div className="cart-menu__inner__total__value">
            {`${priceToStringConverter(total)} Դ`}
          </div>
        </div>
        <div className="cart-menu__inner__parent-btn">
          <Button
            className="cart-menu__inner__parent-btn__button"
            onClick={clickContinue}
          >
            Շարունակել
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart;