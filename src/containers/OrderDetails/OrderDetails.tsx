import React, { useState, useContext } from "react";

import { navigate } from "@reach/router";
import Heading from 'components/Heading/Heading';
import Button from "components/Button/Button";
import OrderDetailsLeftBox from "containers/OrderDetails/OrderDetailsLeftBox/OrderDetailsLeftBox";
import OrderDetailsRightBox from "containers/OrderDetails/OrderDetailsRightBox/OrderDetailsRightBox";
import CheckBoxWithText from 'components/CheckBoxWithText/CheckBoxWithText';
import { AppContext } from "app-context/appContext";
import { ActionTypes } from "app-context/actionTypes";

import "./OrderDetails.scss";

const present = ['Այո', 'Ոչ'];

enum InputNames {
  name = "name",
  address = "address",
  phone = "phone",
  email = "email",
  getter = "getter"
}

interface OrderDetailsProps { }

const OrderDetails: React.FC<OrderDetailsProps> = () => {
  const { state: { orderDetails }, dispatch } = useContext(AppContext);
  const [orderState, setOrderState] = useState(orderDetails)
  const [disabled, setDisabled] = useState(true);

  const inputChangeHandler = (val: string, name: InputNames) => {
    setOrderState({
      ...orderState,
      [name]: val,
    })
    dispatch({ type: ActionTypes.SET_ORDER_DETAILS, payload: orderState })
  }

  const checkAnswer = (idx: number) => {
    return setOrderState({
      ...orderState,
      selection: idx
    })
  }

  const clickContinue = () => {
    navigate('/checkout')
  }
  const { name, address, phone, email, getter, selection } = orderState
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
          phone={phone.replace(/[^0-9]/g, '')}
        />
        <OrderDetailsRightBox
          getterName={getter}
          onChangeName={(val) => inputChangeHandler(val, InputNames.getter)}
        >
          {
            present.map((el, idx) => {
              return (
                <CheckBoxWithText
                  key={el + idx}
                  className="order-details__boxes__check-box"
                  selected={selection === idx}
                  name="present"
                  onClick={() => checkAnswer(idx)}
                >
                  {el}
                </CheckBoxWithText>
              )
            })
          }
        </OrderDetailsRightBox>
      </div>
      <div className="order-details__btn-div">
        <Button className="order-details__btn-div__button"
          disabled={!(name.trim() && address.trim() && phone.trim() && email.trim()) && disabled}
          onClick={clickContinue}>Շարունակել</Button>
      </div>
    </div>
  )
}

export default OrderDetails;