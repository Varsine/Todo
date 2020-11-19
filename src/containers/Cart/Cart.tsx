import React, { useContext } from "react";

import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button/Button";
import CartItem from "containers/CartItem/CartItem";
import Link from "components/Link/Link";
import CloseIcon from "icons/CloseIcon";
import priceToStringConverter from "utils/priceToStringConverter";
import { IProductDataItem } from "data-mockup/product-data.mockup";
import { AppContext } from "app-context/appContext";
import { ActionTypes } from "app-context/actionTypes";

import "./Cart.scss";

interface ICartProps {
  closeCartMenu: () => void;
}

const Cart: React.FC<ICartProps> = ({ closeCartMenu }) => {
  const { state: { orders }, dispatch } = useContext(AppContext);

  const changeItemCount = (id: number, changeCount: number) => {
    dispatch({ type: ActionTypes.CHANGE_ORDER_COUNT, payload: { id, changeCount } });
  }

  const removeOrderItem = (id: number) => {
    dispatch({ type: ActionTypes.REMOVE_ORDER_ITEM, payload: { id } });
  }

  const total = orders.reduce((a: number, b: IProductDataItem) => a + b.price * b.count, 0);

  return (
    <div className="cart-menu">
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
        {orders.length > 0 ? (
          <>
            <div className="cart-menu__inner__shopping">
              {orders.map((product: IProductDataItem) => {
                return (
                  <CartItem
                    key={product.id}
                    count={product.count}
                    price={product.price}
                    productName={product.name}
                    clickMinus={() => changeItemCount(product.id, -1)}
                    clickPlus={() => changeItemCount(product.id, 1)}
                    removeOrderItem={() => removeOrderItem(product.id)}
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
          </>
        ) : (
            <div>No Orders.</div>
          )}
      </div>
    </div>
  )
}

export default Cart;