import React from "react";

import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button/Button";
import CartItem from "containers/CartItem/CartItem";
import CloseIcon from "icons/CloseIcon";
import {productData} from "data-mockup/product-data.mockup";

import "./Cart.scss";

interface ICartProps {
  closeCartMenu: () => void
}

const Cart: React.FC<ICartProps> = ({closeCartMenu}) => {
  const clickContinue = () => {}
  return (
    <div className="cart-menu">
      <div className="cart-menu__inner">
        <div className="cart-menu__inner__basket">
          <TextBlock>Իմ զամբյուղը</TextBlock>
          <div
            onClick={closeCartMenu}
            className="cart-menu__inner__basket__close-icon"
          >
            <CloseIcon/>
          </div>
        </div>
        <div className="cart-menu__inner__shopping">
          {productData.slice(0,2).map((product) => {
            return <CartItem productName={product.name} price={product.price} />
          })}
        </div>
        <div className="cart-menu__inner__total">
          <TextBlock>Ընդամենը</TextBlock>
          <div className="cart-menu__inner__total__value">0.00 Դ</div>
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