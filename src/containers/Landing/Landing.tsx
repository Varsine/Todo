import React from "react";

import Button from "components/Button/Button";
import landingTopBg from "assets/landingTopBg.png";
import TextBlock from "components/TextBlock/TextBlock";
import { productData, IProductDataItem } from "data-mockup/product-data.mockup";
import ProductCard from "components/ProductCard/ProductCard";
import Heading from "components/Heading/Heading";
import FullHeightWrap from "components/FullHeightWrap/FullHeightWrap";

import "./Landing.scss";

interface ILandingProps { }

const Landing: React.FC<ILandingProps> = () => {
  const clickProductCart = () => { }
  const buttonClick = () => { }
  const clickButtonHover = () => { }
  return (
    <div className="app-landing">
      <FullHeightWrap className="app-landing__parent">
        <div className="app-landing__parent__top-column">
          <div className="app-landing__parent__top-column__left-column">
            <img
              className="app-landing__parent__top-column__left-column__img"
              src={landingTopBg}
              alt=""
            />
          </div>
          <div className="app-landing__parent__top-column__right-column">
            <div className="app-landing__parent__top-column__right-column__children">
              <Heading className="app-landing__parent__top-column__right-column__children__heading">
                Ապահովում ենք երջանկություն <br />
                և լավ տրամադրություն <br />
                բոլորին և ամենուր
              </Heading>
              <Button
                className="app-landing__parent__top-column__right-column__children__button"
                onClick={buttonClick}
              >
                Ստանալ
              </Button>
            </div>
          </div>
        </div>
      </FullHeightWrap>
      <FullHeightWrap className="app-landing__product-column">
        <div className="app-landing__product-column__children">
          {productData.map((productData: IProductDataItem) => {
            return (
              <ProductCard
                productName={productData.name}
                price={productData.price}
                productClick={clickProductCart}
                clickButtonHover={clickButtonHover}
              />
            )
          })}
        </div>
        <div className="app-landing__about-boxy">
          <div className="app-landing__about-boxy__children">
            <TextBlock className="app-landing__about-boxy__children__text-block">
              Ի՞նչ է Boxy-ն
          </TextBlock>
            <p className="app-landing__about-boxy__children__text-content">
              Boxy-ն գաղտնի հավաքված նվեր բոքս է, որի պարունակությունը որոշվում է
              Ձեզ մի քանի հարցեր տալուց և Ձեր նախասիրությունները պարզելուց հետո։
              Հետաքրքիր, զարմանալի, հաճելի ու բոլորովին անսպասելի նվեր Ձեր
              մտերիմներին ու սիրելիներին: Boxy-ն կազատի Ձեզ նվեր ընտրելու բարդ
              գործընթացից և, ինչու ոչ, կընդգծի Ձեր յուրօրինակությունը: Իսկ թե ինչ
              կլինի Ձեր բոքսում կիմանաք միայն այն բացելուց հետո:
          </p>
          </div>
        </div>
      </FullHeightWrap>
    </div>
  )
}

export default Landing;
