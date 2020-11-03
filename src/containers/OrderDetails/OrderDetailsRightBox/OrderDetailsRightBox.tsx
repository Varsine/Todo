import React from 'react';

import OrderDetailsContainer from "containers/OrderDetails/OrderDetailsContainer/OrderDetailsContainer";
import InputFieldWithText from "components/InputFieldWithText/InputFieldWithText";
import TextareaField from 'components/TextareaField/TextareaField';
import ProfileInputIcon from "icons/ProfileInputIcon";

import "./OrderDetailsRightBox.scss";

interface IOrderDetailsRightBoxProps {
    onChangeName: (value: string) => void;
    getterName: string;
};

const OrderDetailsRightBox: React.FC<IOrderDetailsRightBoxProps> = ({
    onChangeName,
    getterName,
    children,
}) => {
    return (
        <OrderDetailsContainer className="order-details-right" >
            <div className="order-details-right__check-box-div">
                <p className="order-details-right__check-box-div__text">Արդյոք սա նվե՞ր է</p>
                <div className="order-details-right__check-box-div__content">{children}</div>
            </div>
            <InputFieldWithText
                placeholder="Պողոս Պողոսյան"
                Icon={ProfileInputIcon}
                type='text'
                onChange={onChangeName}
                value={getterName}
                text="Նվերը ստացողի անունը և ազգանունը"
            />
            <div className="order-details-right__textarea-box">
                <p className="order-details-right__textarea-box__text">Մեկնաբանություններ</p>
                <TextareaField 
                className="order-details-right__textarea-box__area"
                placeholder="Հավելյալ նշումներ"
                />
            </div>
        </OrderDetailsContainer>
    );
}

export default OrderDetailsRightBox;