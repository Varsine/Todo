import React, { useState } from "react";

import Heading from 'components/Heading/Heading';
import Button from "components/Button/Button";
import Link from 'components/Link/Link';
import OrderDetailsLeftBox from "components/OrderDetailsLeftBox/OrderDetailsLeftBox";
import OrderDetailsRightBox from "components/OrderDetailsRightBox/OrderDetailsRightBox";
import CheckBoxWithText from 'components/CheckBoxWithText/CheckBoxWithText';
import { presentData } from 'data-mockup/order-present-data.mockup';

import "./OrderDetails.scss";

enum InputNames {
  name = "name",
  address = "address",
  phone = "phone",
  email = "email",
  getter = "getter"
}

interface OrderDetailsProps { }

const OrderDetails: React.FC<OrderDetailsProps> = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    getter: ""
  });


  const inputChangeHandler = (val: string, name: InputNames) => {
    setState({
      ...state,
      [name]: val,
    })
  }

  const checkAnswer = (selection: number | null, idx: number) => {
    return selection = idx
  }

  const onClickCheckBox = () => { }

  const clickContinue = () => { }
  const { name, address, phone, email, getter } = state
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
        />
        <OrderDetailsRightBox
          getterName={getter}
          onChangeName={(val) => inputChangeHandler(val, InputNames.name)}
        >
          {
            presentData.map((el, idx) => {
              return (
                <CheckBoxWithText
                  selected={el.selection === idx}
                  name={el.inputName}
                  onClick={() => checkAnswer(el.selection, idx)}
                >
                  {el.present}
                </CheckBoxWithText>
              )
            })
          }
        </OrderDetailsRightBox>
      </div>
      <Link to="/">
        <Button className="order-details__btn" onClick={clickContinue}>Շարունակել</Button>
      </Link>
    </div>
  )
}

export default OrderDetails;