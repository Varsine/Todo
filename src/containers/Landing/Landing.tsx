import React, { useContext, useRef, useState } from "react";

import Button from "components/Button/Button";
import landingTopBg from "assets/landingTopBg.png";
import landingTopBgMobile from "assets/landingTopBgMobile.png";
import TextBlock from "components/TextBlock/TextBlock";
import { productData, IProductDataItem } from "data-mockup/product-data.mockup";
import ProductCard from "components/ProductCard/ProductCard";
import Heading from "components/Heading/Heading";
import FullHeightWrap from "components/FullHeightWrap/FullHeightWrap";
import { AppContext } from "app-context/appContext";
import { DeviceTypes } from "app-context/contextTypes";

import "./Landing.scss";
import PopupTemplate from "components/PopupTemplate/PopupTemplate";
import productImg from 'assets/productImgSrc.png';

interface ILandingProps { }

const Landing: React.FC<ILandingProps> = () => {
  const { state: { device } } = useContext(AppContext);
  const productsContainerRef = useRef<HTMLDivElement>(null);
  const [addCartPopup, setAddCartPopup] = useState(false)
  const handleGetBtnClick = () => {
    const headerSize = document.getElementById('app-header')?.clientHeight || 0;
    const offsetTop = productsContainerRef.current?.offsetTop || 0;
    window.scrollTo({ top: (offsetTop - headerSize) || 0, behavior: 'smooth' });
  }

  const clickProductCart = () => { }
  const clickButtonHover = () => {
    setAddCartPopup(!addCartPopup)
  }
  const addCartPopupBtnClick = () => {

  }
  return (
    <div className="app-landing">
      <FullHeightWrap className="app-landing__parent">
        <div className="app-landing__parent__top-column">
          <div className="app-landing__parent__top-column__left-column">
            <img
              className="app-landing__parent__top-column__left-column__img"
              src={device !== DeviceTypes.mobile ? landingTopBg : landingTopBgMobile}
              alt="Landing-Illustration"
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
                onClick={handleGetBtnClick}
              >
                Ստանալ
              </Button>
            </div>
          </div>
        </div>
      </FullHeightWrap>
      <div ref={productsContainerRef} className="app-landing__product-column">
        <div className="app-landing__product-column__children">
          {productData.map((productItem: IProductDataItem) => {
            return (
              <ProductCard
                productName={productItem.name}
                price={productItem.price}
                productImgSrc={productItem.imageSource}
                productClick={clickProductCart}
                clickButtonHover={clickButtonHover}
                key={productItem.id}
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
      </div>
      {addCartPopup && (
        <PopupTemplate cartPopup
          header="Ցանկանում ե՞ք ավելացնել զամբյուղի մեջ"
          src={productImg}
          onClick={addCartPopupBtnClick}
          buttonText='Ավելացնել'
          productName="premium"
          price="122"
        />
      )}
    </div>
  )
}

export default Landing;


