import React, { useContext, useRef, useState } from "react";

import Button from "components/Button/Button";
import landingTopBg from "assets/landingTopBg.png";
import landingTopBgMobile from "assets/landingTopBgMobile.png";
import TextBlock from "components/TextBlock/TextBlock";
import { productData, IProductDataItem } from "data-mockup/product-data.mockup";
import ProductCard from "components/ProductCard/ProductCard";
import Heading from "components/Heading/Heading";
import FullHeightWrap from "components/FullHeightWrap/FullHeightWrap";
import AddCartPopup from 'components/AddCartPopup/AddCartPopup';
import { AppContext } from "app-context/appContext";
import { DeviceTypes } from "app-context/contextTypes";

import "./Landing.scss";

interface ILandingProps { }

const Landing: React.FC<ILandingProps> = () => {
  const { state: { device } } = useContext(AppContext);
  const productsContainerRef = useRef<HTMLDivElement>(null);
  const [addCartPopup, setAddCartPopup] = useState(false);
  const [dataModal, setDataModal] = useState({name:"", price:10})
  const handleGetBtnClick = () => {
    const headerSize = document.getElementById('app-header')?.clientHeight || 0;
    const offsetTop = productsContainerRef.current?.offsetTop || 0;
    window.scrollTo({ top: (offsetTop - headerSize) || 0, behavior: 'smooth' });
  }

  const clickProductCart = (data:{name:string, price:any}) => {
    setAddCartPopup(!addCartPopup)
    setDataModal(data)
  }
  const clickButtonHover = () => { }
  const addCartPopupBtnClick = () => { }
  const onClose = () => {
    setAddCartPopup(!addCartPopup)
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
                productClick={()=>clickProductCart(productItem)}
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
        <AddCartPopup
          onClick={addCartPopupBtnClick}
          onClose={onClose}
          productName={dataModal.name}
          price={dataModal.price}
        />
      )}
    </div>
  )
}

export default Landing;