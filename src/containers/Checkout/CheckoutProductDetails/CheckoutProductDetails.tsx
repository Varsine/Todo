import React from 'react';

import Image from 'components/Image/Image';
import TextBlock from "components/TextBlock/TextBlock";
import productImg from 'assets/productImgSrc.png';

import "./CheckoutProductDetails.scss";

interface ICheckoutProductDetailsProps {
    orderProductName: string;
    deliverPrice: string;
    deliverDate: string;
    cost: string;
    total: string;
};

const CheckoutProductDetails: React.FC<ICheckoutProductDetailsProps> = ({
    orderProductName,
    deliverPrice,
    deliverDate,
    cost,
    total,
}) => {
    return (
        <div className='checkout-product-details'>
            <TextBlock className='checkout-product-details__heading'>Ձեր պատվերը</TextBlock>
            <div className="checkout-product-details__product">
                <Image className="checkout-product-details__product__img"
                    src={productImg} />
                <p className="checkout-product-details__product__name">Նվեր տուփ
                <span className="checkout-product-details__product__name__child">{orderProductName}</span>
                </p>
            </div>
            <div className='checkout-product-details__line'></div>
            <div className='checkout-product-details__payment-data'>
                <div className='checkout-product-details__payment-data__cost'>
                    <TextBlock className='checkout-product-details__payment-data__cost__text'>Արժեք</TextBlock>
                    <div className='checkout-product-details__payment-data__cost__value'>{cost}</div>
                </div>
                <div className='checkout-product-details__payment-data__deliver'>
                    <TextBlock className='checkout-product-details__payment-data__deliver__text'>Առաքում</TextBlock>
                    <div className='checkout-product-details__payment-data__deliver__value'>{deliverPrice}</div>
                </div>
                <p className='checkout-product-details__payment-data__term'>{`Առաքվում է ${deliverDate} օրվա ընթացքում`}</p>
                <div className='checkout-product-details__payment-data__total'>
                    <TextBlock className='checkout-product-details__payment-data__total__text'>Ընդամենը</TextBlock>
                    <div className='checkout-product-details__payment-data__total__value'>{total}</div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutProductDetails;