import React from "react";

import Button from "components/Button/Button";
import CheckBoxContainer from "components/CheckBoxContainer/CheckBoxContainer";
import Heading from "components/Heading/Heading";
import LandingAbout from "components/LandingAbout/LandingAbout";
import {productData} from "components/productData/productData";

import "./Landing.scss";

interface ILandingProps {}

const Landing: React.FC<ILandingProps> = () => {
  const clickProductCart = () => {}
  const buttonClick = () => {}
  const clickButtonHover = () => {}
  return (
    <div className="app-landing">
      <div className="app-landing__top-column">
        <div className="app-landing__top-column__left-column"></div>
        <div className="app-landing__top-column__right-column">
          <Heading className="app-landing__top-column__right-column__heading">
            Ապահովում ենք երջանկություն <br />
            և լավ տրամադրություն <br />
            բոլորին և ամենուր
          </Heading>
          <Button
            className="app-landing__top-column__right-column__button"
            onClick={buttonClick}
          >
            Ստանալ
          </Button>
        </div>
      </div>
      <div className="app-landing__checkout-box">
        {productData.map((productData) => {
          return (
            <CheckBoxContainer
              productType={productData.name}
              cost={productData.cost}
              productClick={clickProductCart}
              clickButtonHover={clickButtonHover}
            />
          )
        })}
      </div>
      <div className="app-landing__about-boxy">
        <Heading className="app-landing__about-boxy__heading">
          Ի՞նչ է Boxy-ն
        </Heading>
        <LandingAbout>
          Boxy-ն գաղտնի հավաքված նվեր բոքս է, որի պարունակությունը որոշվում է
          Ձեզ մի քանի հարցեր տալուց և Ձեր նախասիրությունները պարզելուց հետո։
          Հետաքրքիր, զարմանալի, հաճելի ու բոլորովին անսպասելի նվեր Ձեր
          մտերիմներին ու սիրելիներին: Boxy-ն կազատի Ձեզ նվեր ընտրելու բարդ
          գործընթացից և, ինչու ոչ, կընդգծի Ձեր յուրօրինակությունը: Իսկ թե ինչ
          կլինի Ձեր բոքսում կիմանաք միայն այն բացելուց հետո:
        </LandingAbout>
      </div>
    </div>
  )
}

export default Landing
