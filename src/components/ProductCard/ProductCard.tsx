import React from "react";

import productImgSrc from "assets/productImgSrc.png";
import Image from "components/Image/Image";
import Button from "components/Button/Button";
import CartIcon from "icons/CartIcon";
import TextBlock from "components/TextBlock/TextBlock";
import priceToStringConverter from "utils/priceToStringConverter";

import "./ProductCard.scss";

interface IProductCardProps {
  productName: string
  productClick: () => void
  clickButtonHover: () => void
  price: number
}

const ProductCard: React.FC<IProductCardProps> = ({
  productName,
  productClick,
  clickButtonHover,
  price,
}) => {
  return (
    <div className="product-card">
      <div className="product-card__image-column">
        <div className="product-card__image-column__img-container">
          <Image onClick={productClick} src={productImgSrc} />
        </div>
        <div className="product-card__image-column__img-hover">
          <div className="product-card__image-column__img-hover__external-column">
            <span className="product-card__image-column__img-hover__external-column__price">
              {`${priceToStringConverter(price)} Դ`}
            </span>
            <Button
              className="product-card__image-column__img-hover__external-column__button"
              onClick={clickButtonHover}
            >
              <span className="product-card__image-column__img-hover__external-column__button__text">Գնել</span>
              <CartIcon />
            </Button>
          </div>
        </div>
      </div>
      <TextBlock className="product-card__text-block">
        {`Նվեր տուփ ${productName}`}
      </TextBlock>
    </div>
  )
}

export default ProductCard;
