import React, {useState} from "react";

import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button/Button";
import CartItem from "containers/CartItem/CartItem";
import Link from "components/Link/Link";
import CloseIcon from "icons/CloseIcon";
import priceToStringConverter from "utils/priceToStringConverter";
import {productData as mockupData, IProductDataItem} from "data-mockup/product-data.mockup";

import "./Cart.scss";

interface ICartProps {
  closeCartMenu: () => void
  className?: string
}

const productData = mockupData.slice(0, 2)

const Cart: React.FC<ICartProps> = ({closeCartMenu, className}) => {
  const [counts, setCounts] = useState(
    productData.map((el: IProductDataItem) => {
      return {id: el.id, count: 1, price: el.price}
    })
  )

  const changeItemCount = (id: number, newCount: number) => {
    if (newCount > 0) {
      const countsCopy = [...counts]
      const whichEl = countsCopy.find((el) => el.id === id)
      if (whichEl) {
        whichEl.count = newCount
        setCounts(countsCopy)
      }
    }
  }

  const total = counts.reduce((a, b) => a + b.price * b.count, 0)

  return (
    <div className={`cart-menu ${className}`}>
      <div className="cart-menu__basis" onClick={closeCartMenu}></div>
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
          {productData.slice(0, 2).map((product: IProductDataItem) => {
            const currentCount =
              counts.find((el) => el.id === product.id)?.count || 1
            return (
              <CartItem
                key={product.id}
                count={currentCount}
                price={product.price}
                clickMinus={() => changeItemCount(product.id, currentCount - 1)}
                clickPlus={() => changeItemCount(product.id, currentCount + 1)}
                productName={product.name}
              />
            )
          })}
        </div>
        <div className="cart-menu__inner__total">
          <TextBlock className="cart-menu__inner__total__text">
            Ընդամենը
          </TextBlock>
          <div className="cart-menu__inner__total__value">
            {`${priceToStringConverter(total)} Դ`}
          </div>
        </div>
        <div className="cart-menu__inner__parent-btn">
          <Link to="/quiz">
            <Button
              className="cart-menu__inner__parent-btn__button"
              onClick={closeCartMenu}
            >
              Շարունակել
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart;