import React, { useState, useContext, useEffect } from "react";

import { navigate } from "@reach/router";
import Heading from 'components/Heading/Heading';
import Button from "components/Button/Button";
import OrderDetailsLeftBox from "containers/OrderDetails/OrderDetailsLeftBox/OrderDetailsLeftBox";
import OrderDetailsRightBox from "containers/OrderDetails/OrderDetailsRightBox/OrderDetailsRightBox";
import CheckBoxWithText from 'components/CheckBoxWithText/CheckBoxWithText';
import { AppContext } from "app-context/appContext";
import { ActionTypes } from "app-context/actionTypes";
import { inputValidation, InputNames } from "utils/inputValidation";

import "./OrderDetails.scss";

const present = ['Այո', 'Ոչ'];

const OrderDetails: React.FC = () => {
  const { state: { user, orderDetails }, dispatch } = useContext(AppContext);
  const [errorState, setErrorState] = useState({
    nameError: '',
    shippingAddress: '',
    phoneError: '',
    emailError: '',
  })
  const [giftReceiverError, setGiftReceiverError] = useState('');

  useEffect(() => {
    if (user) {
      dispatch({
        type: ActionTypes.SET_ORDER_DETAILS, payload: {
          ...orderDetails,
          name: user.displayName,
          email: user.email,
        }
      })
    }
  }, []);

  const inputChangeHandler = (val: string, name: InputNames) => {
    dispatch({
      type: ActionTypes.SET_ORDER_DETAILS, payload: {
        ...orderDetails,
        [name]: val,
      } });
  }

  const checkAnswer = (idx: number) => {
    dispatch({
      type: ActionTypes.SET_ORDER_DETAILS, payload: {
        ...orderDetails,
        selection: idx
      }
    });
  }

  const { name, address, phone, email, giftReceiverName, selection } = orderDetails;

  const checkFields = () => {
    const isNameValid = inputValidation(name, InputNames.name);
    const isAddressValid = inputValidation(address, InputNames.address);
    const isPhoneValid = inputValidation(phone, InputNames.phone);
    const isEmailValid = inputValidation(email, InputNames.email);
    const isGiftReceiverNameValid = inputValidation(giftReceiverName, InputNames.giftReceiverName);
    setErrorState({
      nameError: isNameValid.errorText,
      emailError: isEmailValid.errorText,
      phoneError: isPhoneValid.errorText,
      shippingAddress: isAddressValid.errorText,
    })
    setGiftReceiverError(isGiftReceiverNameValid.errorText);
    if (isNameValid.isValid &&
      isAddressValid.isValid &&
      isPhoneValid.isValid &&
      isEmailValid.isValid
    ) {
      if (selection === 0 && !isGiftReceiverNameValid.isValid) {
        return false;
      }
      return true;
    }
    return false;
  }

  const clickContinue = () => {
    if (checkFields()) {
      navigate('/checkout')
    }
  }

  return (
    <div className="order-details">
      <div className="order-details__bg"></div>
      <Heading className="order-details__heading">Պատվերի տվյալներ</Heading>
      <div className="order-details__boxes">
        <OrderDetailsLeftBox
          onChangeName={(val) => inputChangeHandler(val, InputNames.name)}
          onChangeAddress={(val) => inputChangeHandler(val, InputNames.address)}
          onChangeEmail={(val) => inputChangeHandler(val, InputNames.email)}
          onChangePhone={(val) => inputChangeHandler(val, InputNames.phone)}
          name={name}
          address={address}
          email={email}
          phone={phone}
          errors={errorState}
        />
        <OrderDetailsRightBox
          giftReceiverName={giftReceiverName}
          giftReceiverNameError={giftReceiverError}
          showError={selection === 0}
          onChangeName={(val) => inputChangeHandler(val, InputNames.giftReceiverName)}
        >
          {present.map((el, idx) => (
            <CheckBoxWithText
              key={el + idx}
              className="order-details__boxes__check-box"
              selected={selection === idx}
              name="present"
              onClick={() => checkAnswer(idx)}
            >
              {el}
            </CheckBoxWithText>
          ))}
        </OrderDetailsRightBox>
      </div>
      <div className="order-details__btn-div">
        <Button className="order-details__btn-div__button"
          onClick={clickContinue}>Շարունակել</Button>
      </div>
    </div>
  )
}

export default OrderDetails;