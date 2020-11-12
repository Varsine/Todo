import React, { useState, useContext } from "react";

import { navigate } from "@reach/router";
import Heading from 'components/Heading/Heading';
import Button from "components/Button/Button";
import Link from 'components/Link/Link';
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
  const [stateOrder, setStateOrder] = useState(orderDetails)

  const inputChangeHandler = (val: string, name: InputNames) => {
    setStateOrder({
      ...stateOrder,
      [name]: val,
    })
    dispatch({ type: ActionTypes.SET_ORDER_DETAILS, payload: stateOrder })
  }

  const checkAnswer = (idx: number) => {
    return setStateOrder({
      ...stateOrder,
      selection: idx
    })
  }

  const clickContinue = () => {
    if (name !== "" && address !== "" && phone !== "" && email !== "") {
      navigate('/checkout')
    }
  }
  const { name, address, phone, email, getter, selection } = stateOrder
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
          <Button className="order-details__btn-div__button" onClick={clickContinue}>Շարունակել</Button>
      </div>
    </div>
  )
}

export default OrderDetails;