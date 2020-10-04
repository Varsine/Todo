import React from "react";

import productCart from "images/productCart.png";
import CheckBoxWithText from "components/CheckBoxWithText/CheckBoxWithText";
import CheckoutProductCard from "components/CheckoutProductCard/CheckoutProductCard";
import CheckoutProductHover from "components/CheckoutProductHover/CheckoutProductHover";

import "./CheckBoxContainer.scss";

interface ICheckBoxContainerProps {
  productType: string
  productClick: () => void
  clickButtonHover: () => void
  cost: string
}

const CheckBoxContainer: React.FC<ICheckBoxContainerProps> = ({
  productType,
  productClick,
  clickButtonHover,
  cost,
}) => {
  return (
    <div className="checkout-content">
      <div className="checkout-content__product">
        <CheckoutProductCard className="checkout-content__product__img"
          productClick={productClick}
          src={productCart}
          alt={productType}
        />
        <CheckoutProductHover className="checkout-content__product__field-purchase" buttonClick={clickButtonHover} cost={cost}>Գնել</CheckoutProductHover>
      </div>
      <CheckBoxWithText productType={productType}>Նվեր տուփ -</CheckBoxWithText>
    </div>
  )
}

export default CheckBoxContainer
