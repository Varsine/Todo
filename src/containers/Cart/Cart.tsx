import React from "react";

import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button/Button";
import CartItem from "containers/CartItem/CartItem";
import {productData} from "data-mockup/productDataMockup";

import "./Cart.scss";

interface ICartProps {
  close: any
  closeCartMenu: () => void
}

const Cart: React.FC<ICartProps> = ({close, closeCartMenu}) => {
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
            {close}
          </div>
        </div>
        <div className="cart-menu__inner__shopping">
          {productData.map((product) => {
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