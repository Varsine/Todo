import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";

import { AppContext } from "app-context/appContext";
import Heading from "components/Heading/Heading";
import TextBlock from "components/TextBlock/TextBlock";
import Button from "components/Button/Button";
import CheckBoxContainer from "components/CheckBoxContainer/CheckBoxContainer";
import ThankYouPopup from 'components/ThankYouPopup/ThankYouPopup';
import { deliverData, productData } from "data-mockup/product-data.mockup";
import priceToStringConverter from "utils/priceToStringConverter";

import CheckoutProductDetails from "./CheckoutProductDetails/CheckoutProductDetails";

import "./Checkout.scss";

const Checkout: React.FC = () => {
  const [showThanksPopup, setShowThanksPopup] = useState(false)
  const { state: { orderDetails } } = useContext(AppContext);
  const orderProduct = productData[0];
  const cost = orderProduct.price;
  const total = cost + deliverData.price;

  const togglePopup = () => {
    setShowThanksPopup(!showThanksPopup);
  }

  const handleOrderFinish = () => {
    // TODO Handle request to server
    // TODO RESET Context data
    togglePopup();
    navigate('/');
  }

  const { name, address, phone, email, info, giftReceiverName } = orderDetails;

  return (
    <div className='app-checkout'>
      <Heading className='app-checkout__title'>Տվյալների ստուգում</Heading>
      <div className='app-checkout__content'>
        <div className='app-checkout__content__left-column'>
          <div className='app-checkout__content__left-column__shipping-details'>
            <TextBlock className='app-checkout__content__left-column__shipping-details__heading'>Առաքման տվյալներ</TextBlock>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>Անուն: {name}</p>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>Հասցե: {address}</p>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>Էլ․ փոստ: {email}</p>
            <p className='app-checkout__content__left-column__shipping-details__get-data'>Հեռ։ {phone}</p>
            {info && <p className='app-checkout__content__left-column__shipping-details__get-data'>Մեկնաբանություններ: {info}</p>}
            {giftReceiverName && <p className='app-checkout__content__left-column__shipping-details__get-data'>Ստացող: {giftReceiverName}</p>}
          </div>
          <div className='app-checkout__content__left-column__payment-method'>
            <TextBlock className='app-checkout__content__left-column__payment-method__heading'>Վճարման եղանակ</TextBlock>
            <CheckBoxContainer
              className="app-checkout__content__left-column__payment-method__check-box"
              name="cash"
              onClick={() => { }}
              text="Կանխիկ"
              selected
            />
          </div>
        </div>
        <CheckoutProductDetails
          orderProductName={orderProduct.name}
          deliverPrice={`${priceToStringConverter(deliverData.price)} Դ`}
          deliverDate={deliverData.days}
          cost={`${priceToStringConverter(cost)} Դ`}
          total={`${priceToStringConverter(total)} Դ`}
        />
      </div>
      <div className='app-checkout__btn-div'>
        <div className='app-checkout__btn-div__parent'>
          <Button onClick={togglePopup} className='app-checkout__btn-div__parent__button'>Պատվիրել</Button>
        </div>
      </div>
      {showThanksPopup && (
        <ThankYouPopup onClick={handleOrderFinish} />
      )}
    </div>
  )
};

export default Checkout;