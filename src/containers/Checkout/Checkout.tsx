import React, { useState, useContext } from "react";

import { AppContext } from "app-context/appContext";
import Heading from "components/Heading/Heading";
import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button/Button";
import CheckBoxContainer from "components/CheckBoxContainer/CheckBoxContainer";
import { productData as mockupData} from "data-mockup/product-data.mockup";
import priceToStringConverter from "utils/priceToStringConverter";
import CheckoutProductDetails from "./CheckoutProductDetails/CheckoutProductDetails";

import "./Checkout.scss";

interface ICheckoutProps { };

const Checkout: React.FC<ICheckoutProps> = () => {
  const { state: { orderDetails } } = useContext(AppContext);
  const orderProduct = mockupData[0]
  const [selected, setSelected] = useState(true)
  const cost = orderProduct.price;
  const deliver = 500;
  const total = cost + deliver;

  const clickOrder = () => { }

  const onCash = () => {
    setSelected(!selected)
  }

  const { name, address, phone, email } = orderDetails
  return (
    <div className='app-checkout'>
      <Heading className='app-checkout__title'>Տվյալների ստուգում</Heading>
      <div className='app-checkout__content'>
        <div className='app-checkout__content__left-column'>
          <div className='app-checkout__content__left-column__shipping-details'>
            <TextBlock className='app-checkout__content__left-column__shipping-details__heading'>Առաքման տվյալներ</TextBlock>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>{name}</p>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>{address}</p>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>{email}</p>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>{phone}</p>
          </div>
          <div className='app-checkout__content__left-column__payment-method'>
            <TextBlock className='app-checkout__content__left-column__payment-method__heading'>Վճարման եղանակ</TextBlock>
            <CheckBoxContainer
              className="app-checkout__content__left-column__payment-method__check-box"
              name="cash"
              onClick={onCash}
              text="Կանխիկ"
              selected
            />
          </div>
        </div>
        <CheckoutProductDetails
          orderProductName={orderProduct.name}
          onCash={onCash}
          deliver={`${priceToStringConverter(deliver)} Դ`}
          cost={`${priceToStringConverter(cost)} Դ`}
          total={`${priceToStringConverter(total)} Դ`}
        />
      </div>
      <div className='app-checkout__btn-div'>
        <div className='app-checkout__btn-div__parent'>
          <Button onClick={clickOrder} className='app-checkout__btn-div__parent__button'>Պատվիրել</Button>
        </div>
      </div>
    </div>
  )
};

export default Checkout;